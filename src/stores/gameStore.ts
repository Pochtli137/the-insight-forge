import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameState, Question } from '../types/game';
import { questions } from '../data/questions';
import { realms } from '../data/realms';

interface GameActions {
  setGroupName: (name: string) => void;
  startRealm: (realmId: number) => void;
  answerQuestion: (questionId: string, correct: boolean) => void;
  startMiniGame: (question: Question) => void;
  completeMiniGame: (correct: boolean) => void;
  nextQuestion: () => void;
  completeRealm: () => void;
  nextRealm: () => void;
  finishGame: () => void;
  resetGame: () => void;
  getCurrentQuestion: () => Question | undefined;
  getRealmQuestions: () => Question[];
  unlockAchievement: (id: string) => void;
  dismissAchievement: () => void;
  getTitle: () => string;
  checkRealmAchievements: () => void;
}

const initialState: GameState = {
  phase: 'join',
  groupName: '',
  currentRealm: 1,
  currentQuestionIndex: 0,
  score: 0,
  streak: 0,
  answers: {},
  realmScores: {},
  lastAnswerCorrect: null,
  currentMiniGame: null,
  runeSegments: {},
  unlockedAchievements: [],
  pendingAchievement: null,
};

export const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      setGroupName: (name) => set({ groupName: name }),

      startRealm: (realmId) => set((state) => ({
        phase: 'playing',
        currentRealm: realmId,
        currentQuestionIndex: 0,
        lastAnswerCorrect: null,
        currentMiniGame: null,
        runeSegments: {
          ...state.runeSegments,
          [realmId]: state.runeSegments[realmId] || new Array(10).fill(false),
        },
      })),

      answerQuestion: (questionId, correct) => {
        const state = get();
        const basePoints = correct ? 100 : 0;
        const streakMultiplier = correct && state.streak >= 3 ? 1.5 : 1;
        const points = Math.round(basePoints * streakMultiplier);
        const newStreak = correct ? state.streak + 1 : 0;

        // Update rune segments
        const realmSegments = [...(state.runeSegments[state.currentRealm] || new Array(10).fill(false))];
        realmSegments[state.currentQuestionIndex] = correct;

        const newAnswers = {
          ...state.answers,
          [questionId]: { correct, points, firstTry: true },
        };

        set({
          score: state.score + points,
          streak: newStreak,
          lastAnswerCorrect: correct,
          answers: newAnswers,
          realmScores: {
            ...state.realmScores,
            [state.currentRealm]: (state.realmScores[state.currentRealm] || 0) + points,
          },
          runeSegments: {
            ...state.runeSegments,
            [state.currentRealm]: realmSegments,
          },
        });

        // Check achievements after state update
        const updatedState = get();

        // first-blood: first correct answer
        if (correct) {
          const previousCorrectCount = Object.values(state.answers).filter(a => a.correct).length;
          if (previousCorrectCount === 0) {
            get().unlockAchievement('first-blood');
          }
        }

        // streak achievements
        if (newStreak >= 3 && !updatedState.unlockedAchievements.includes('streak-3')) {
          get().unlockAchievement('streak-3');
        }
        if (newStreak >= 5 && !updatedState.unlockedAchievements.includes('streak-5')) {
          get().unlockAchievement('streak-5');
        }
        if (newStreak >= 10 && !updatedState.unlockedAchievements.includes('streak-10')) {
          get().unlockAchievement('streak-10');
        }

        // survivor: streak was 0 and previous 3 answers were wrong, now correct
        if (correct && state.streak === 0) {
          const answerEntries = Object.values(state.answers);
          if (answerEntries.length >= 3) {
            const last3 = answerEntries.slice(-3);
            const all3Wrong = last3.every(a => !a.correct);
            if (all3Wrong) {
              get().unlockAchievement('survivor');
            }
          }
        }
      },

      startMiniGame: (question) => set({
        phase: 'mini-game',
        currentMiniGame: question,
      }),

      completeMiniGame: (correct) => {
        const state = get();
        const points = correct ? 50 : 0;
        const questionId = state.currentMiniGame?.id;
        if (questionId) {
          set({
            phase: 'playing',
            score: state.score + points,
            currentMiniGame: null,
            answers: {
              ...state.answers,
              [questionId]: { correct: true, points, firstTry: false },
            },
            realmScores: {
              ...state.realmScores,
              [state.currentRealm]: (state.realmScores[state.currentRealm] || 0) + points,
            },
          });
        }
      },

      nextQuestion: () => {
        const state = get();
        const totalInRealm = questions.filter(q => q.realm === state.currentRealm).length;
        if (state.currentQuestionIndex + 1 >= totalInRealm) {
          set({ phase: 'realm-complete' });
          get().checkRealmAchievements();
        } else {
          set({
            currentQuestionIndex: state.currentQuestionIndex + 1,
            lastAnswerCorrect: null,
          });
        }
      },

      completeRealm: () => {
        set({ phase: 'realm-complete' });
        get().checkRealmAchievements();
      },

      nextRealm: () => {
        const state = get();
        if (state.currentRealm >= 5) {
          set({ phase: 'finished' });
          // Check perfectionist at game end
          const totalQuestions = questions.length;
          const correctFirstTry = Object.values(state.answers).filter(a => a.correct && a.firstTry).length;
          if (correctFirstTry >= totalQuestions) {
            get().unlockAchievement('perfectionist');
          }
        } else {
          set({
            phase: 'realm-intro',
            currentRealm: state.currentRealm + 1,
            currentQuestionIndex: 0,
          });
        }
      },

      finishGame: () => {
        set({ phase: 'finished' });
        const state = get();
        const totalQuestions = questions.length;
        const correctFirstTry = Object.values(state.answers).filter(a => a.correct && a.firstTry).length;
        if (correctFirstTry >= totalQuestions) {
          get().unlockAchievement('perfectionist');
        }
      },

      resetGame: () => set(initialState),

      getCurrentQuestion: () => {
        const state = get();
        const realmQuestions = questions.filter(q => q.realm === state.currentRealm);
        return realmQuestions[state.currentQuestionIndex];
      },

      getRealmQuestions: () => {
        const state = get();
        return questions.filter(q => q.realm === state.currentRealm);
      },

      unlockAchievement: (id) => {
        const state = get();
        if (!state.unlockedAchievements.includes(id)) {
          set({
            unlockedAchievements: [...state.unlockedAchievements, id],
            pendingAchievement: id,
          });
        }
      },

      dismissAchievement: () => set({ pendingAchievement: null }),

      getTitle: () => {
        const state = get();
        const correctCount = Object.values(state.answers).filter(a => a.correct && a.firstTry).length;
        const totalAnswered = Object.keys(state.answers).length;
        const ratio = totalAnswered > 0 ? correctCount / totalAnswered : 0;

        if (totalAnswered === 0) return 'Uninitiated';
        if (ratio >= 0.9 && totalAnswered >= 10) return 'Legendary Oracle';
        if (ratio >= 0.8) return 'Master Forger';
        if (ratio >= 0.7) return 'Insight Weaver';
        if (ratio >= 0.6) return 'Journeyman Seer';
        if (ratio >= 0.4) return 'Apprentice';
        return 'Wanderer';
      },

      checkRealmAchievements: () => {
        const state = get();

        // flawless-realm: all questions in the current realm answered correctly on first try
        const realmQuestions = questions.filter(q => q.realm === state.currentRealm);
        const allFlawless = realmQuestions.every(q => {
          const answer = state.answers[q.id];
          return answer && answer.correct && answer.firstTry;
        });
        if (allFlawless) {
          get().unlockAchievement('flawless-realm');
        }

        // half-way: count completed realms (realms where all questions are answered)
        let completedRealms = 0;
        for (let r = 1; r <= 5; r++) {
          const rQuestions = questions.filter(q => q.realm === r);
          const allAnswered = rQuestions.every(q => state.answers[q.id]);
          if (allAnswered) completedRealms++;
        }
        if (completedRealms >= 3) {
          get().unlockAchievement('half-way');
        }

        // all-runes: all 6 runes have all segments true
        const allRunesComplete = realms.every(realm => {
          const segments = state.runeSegments[realm.id];
          return segments && segments.every(Boolean);
        });
        if (allRunesComplete) {
          get().unlockAchievement('all-runes');
        }
      },
    }),
    {
      name: 'insight-forge-game',
    }
  )
);
