export type QuestionType = 'multiple-choice' | 'ordering' | 'matching' | 'true-false';
export type MiniGameType = 'forge' | 'sort' | 'flash';

export interface ForgeData {
  template: string; // e.g. "We believe ___ is caused by ___"
  blanks: string[]; // correct words for each blank
  distractors: string[]; // extra wrong words
}

export interface SortData {
  buckets: string[]; // e.g. ["Qualitative", "Quantitative"]
  items: { text: string; bucket: number }[]; // bucket index
}

export interface FlashData {
  explanation: string;
  verifyQuestion: string;
  verifyOptions: string[];
  verifyAnswer: number;
}

export interface Question {
  id: string;
  realm: number;
  type: QuestionType;
  question: string;
  // For MC and TF:
  options?: string[];
  correctAnswer?: number;
  // For ordering:
  items?: string[];
  correctOrder?: number[];
  // For matching:
  leftColumn?: string[];
  rightColumn?: string[];
  correctPairs?: [number, number][];
  // Mini-game:
  miniGameType: MiniGameType;
  miniGameData: ForgeData | SortData | FlashData;
  explanation: string;
  flavorText?: string;
}

export interface Realm {
  id: number;
  name: string;
  subtitle: string;
  narrativeIntro: string;
  narrativeOutro: string;
  icon: string; // emoji
  rune: string;
}

export interface GameState {
  phase: 'join' | 'realm-intro' | 'playing' | 'mini-game' | 'realm-complete' | 'finished';
  groupName: string;
  currentRealm: number;
  currentQuestionIndex: number;
  score: number;
  streak: number;
  answers: Record<string, { correct: boolean; points: number; firstTry: boolean }>;
  realmScores: Record<number, number>;
  lastAnswerCorrect: boolean | null;
  currentMiniGame: Question | null;
  runeSegments: Record<number, boolean[]>;
  unlockedAchievements: string[];
  pendingAchievement: string | null;
}
