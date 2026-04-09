import { useState, useEffect } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { bossFights } from '../../data/bossFights';
import { realms } from '../../data/realms';
import { useSound } from '../../hooks/useSound';
import OrderingQuestion from '../questions/OrderingQuestion';
import SortTheSignal from '../minigames/SortTheSignal';
import MultipleChoice from '../questions/MultipleChoice';
import TrueFalse from '../questions/TrueFalse';
import MatchingQuestion from '../questions/MatchingQuestion';
import NumericInput from './NumericInput';
import type { Question, SortData } from '../../types/game';

type BossPhase = 'intro' | 'task' | 'result';

export default function BossFight() {
  const currentRealm = useGameStore((s) => s.currentRealm);
  const completeBossFight = useGameStore((s) => s.completeBossFight);
  const { play } = useSound();

  const boss = bossFights[currentRealm];
  const realm = realms.find((r) => r.id === currentRealm);

  const [phase, setPhase] = useState<BossPhase>('intro');
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const isFinalBoss = currentRealm >= 5;

  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    if (phase === 'intro') {
      play('boss-intro');
      if (isFinalBoss) {
        const timer = setTimeout(() => setIntroReady(true), 3000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase('task'), 4000);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, play, isFinalBoss]);

  if (!boss || !realm) return null;

  const handleAnswer = (isCorrect: boolean) => {
    setAnswered(true);
    setCorrect(isCorrect);
    if (isCorrect) {
      play('boss-defeat');
      setTimeout(() => setPhase('result'), 1500);
    } else {
      play('wrong');
      setTimeout(() => setPhase('result'), 800);
    }
  };

  const handleComplete = () => {
    completeBossFight(correct);
  };

  const handleRetry = () => {
    setAnswered(false);
    setCorrect(false);
    setPhase('task');
  };

  // Build a fake Question object for components that expect it
  const fakeQuestion: Question = {
    id: `boss-${boss.realmId}`,
    realm: boss.realmId,
    type: 'ordering',
    question: boss.question,
    items: boss.items,
    correctOrder: boss.correctOrder,
    options: boss.options,
    correctAnswer: boss.correctAnswer,
    leftColumn: boss.leftColumn,
    rightColumn: boss.rightColumn,
    correctPairs: boss.correctPairs,
    miniGameType: 'forge',
    miniGameData: { template: '', blanks: [], distractors: [] },
    explanation: '',
  };

  const renderQuestion = () => {
    switch (boss.questionType) {
      case 'ordering':
        return (
          <OrderingQuestion
            question={fakeQuestion}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        );
      case 'sort-buckets':
        return (
          <SortTheSignal
            data={{ buckets: boss.buckets!, items: boss.sortItems! } as SortData}
            onComplete={handleAnswer}
          />
        );
      case 'numeric-input':
        return (
          <NumericInput
            correctValue={boss.correctNumeric!}
            tolerance={boss.numericTolerance ?? 0}
            unit={boss.numericUnit}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        );
      case 'multiple-choice':
        return (
          <MultipleChoice
            question={fakeQuestion}
            onAnswer={handleAnswer}
            disabled={answered}
            hideCorrect
          />
        );
      case 'true-false':
        return (
          <TrueFalse
            question={fakeQuestion}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        );
      case 'matching':
        return (
          <MatchingQuestion
            question={fakeQuestion}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        );
      default:
        return null;
    }
  };

  if (phase === 'intro') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className={`mx-auto max-w-lg text-center ${isFinalBoss ? 'animate-final-boss' : ''}`}>
          <div className={`animate-boss-emerge mb-6 ${isFinalBoss ? 'text-[120px]' : 'text-8xl'}`}>{realm.icon}</div>
          <h2 className={`animate-fade-in-up font-serif font-bold text-forge-crimson ${isFinalBoss ? 'text-6xl tracking-wider' : 'text-5xl'}`}>
            {isFinalBoss ? 'FINAL BOSS' : 'BOSS FIGHT'}
          </h2>
          <p className={`animate-fade-in-up mt-4 font-serif text-forge-gold ${isFinalBoss ? 'text-4xl' : 'text-3xl'}`}>
            {boss.bossName}
          </p>
          <p className={`mt-6 font-serif italic ${isFinalBoss ? 'text-2xl text-forge-parchment/80' : 'text-forge-parchment/70'}`}>
            {boss.bossTaunt}
          </p>
          {isFinalBoss && introReady && (
            <button
              onClick={() => setPhase('task')}
              className="animate-fade-in-up mt-10 rounded bg-forge-crimson px-10 py-4 font-serif text-2xl font-semibold text-forge-parchment transition-all hover:shadow-[0_0_30px_rgba(139,38,53,0.5)]"
            >
              Face the Oracle
            </button>
          )}
        </div>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 text-7xl">{correct ? '💀' : '🛡'}</div>
          <h2 className={`animate-fade-in-up mb-4 font-serif text-4xl font-bold ${correct ? 'text-forge-teal' : 'text-forge-crimson'}`}>
            {correct ? 'Boss Defeated' : 'The Boss Stands'}
          </h2>
          <p className="mb-2 font-serif text-2xl text-forge-gold">
            {correct ? '+200 pts' : '+0 pts'}
          </p>
          <p className="mb-6 font-serif italic text-forge-parchment/70">
            {correct ? boss.bossDefeat : boss.bossTaunt}
          </p>
          {!correct && boss.hint && (
            <div className="mb-8 rounded border border-forge-gold/30 bg-forge-gold/5 p-4">
              <p className="mb-1 font-serif text-base font-semibold text-forge-gold">Hint</p>
              <p className="text-base text-forge-parchment/80" dangerouslySetInnerHTML={{ __html: boss.hint }} />
            </div>
          )}
          {correct ? (
            <button
              onClick={handleComplete}
              className="animate-fade-in-up rounded bg-forge-gold px-8 py-3 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleRetry}
              className="animate-fade-in-up rounded bg-forge-crimson px-8 py-3 font-semibold text-forge-parchment transition-all hover:shadow-[0_0_20px_rgba(139,38,53,0.4)]"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    );
  }

  // Task phase
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-2xl">
        {/* Boss header */}
        <div className="mb-6 text-center">
          <p className="mb-1 text-base font-semibold uppercase tracking-widest text-forge-crimson">
            {isFinalBoss ? 'Final Boss' : 'Boss Fight'}
          </p>
          <h2 className="font-serif text-3xl font-bold text-forge-gold">
            {boss.bossName}
          </h2>
        </div>

        {/* Task description */}
        <div className="mb-6 space-y-2 rounded border border-forge-border bg-forge-card p-5">
          {boss.taskDescription.split('\n').map((line, i) => (
            <p key={i} className={`text-base ${i === 0 ? 'text-forge-parchment' : 'text-forge-muted break-all'}`}>{line}</p>
          ))}
        </div>

        {/* Question */}
        <h3 className="mb-6 text-center font-serif text-2xl text-forge-parchment">
          {boss.question}
        </h3>

        {/* Answer component */}
        {renderQuestion()}
      </div>
    </div>
  );
}
