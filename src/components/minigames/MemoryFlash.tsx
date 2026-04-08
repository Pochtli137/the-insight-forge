import { useState, useEffect } from 'react';
import type { FlashData } from '../../types/game';

interface MemoryFlashProps {
  data: FlashData;
  onComplete: (correct: boolean) => void;
}

export default function MemoryFlash({ data, onComplete }: MemoryFlashProps) {
  const [phase, setPhase] = useState<'reading' | 'answering'>('reading');
  const [countdown, setCountdown] = useState(6);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (phase !== 'reading') return;
    if (countdown <= 0) {
      setPhase('answering');
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, countdown]);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const correct = index === data.verifyAnswer;
    setTimeout(() => onComplete(correct), 1200);
  };

  if (phase === 'reading') {
    return (
      <div className="animate-fade-in-up text-center">
        <p className="mb-6 font-serif text-lg text-forge-parchment">{data.explanation}</p>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-forge-gold">
          <span className="font-serif text-2xl font-bold text-forge-gold">{countdown}</span>
        </div>
        <p className="mt-4 text-sm text-forge-muted">Memorize this. A question follows.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up text-center">
      <h3 className="mb-6 font-serif text-xl text-forge-parchment">{data.verifyQuestion}</h3>
      <div className="space-y-3">
        {data.verifyOptions.map((option, i) => {
          let classes =
            'w-full rounded border px-4 py-3 text-left transition-all duration-200 ';

          if (selected === null) {
            classes +=
              'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer';
          } else if (i === data.verifyAnswer) {
            classes += 'border-forge-teal bg-forge-teal/20 text-forge-parchment';
          } else if (i === selected) {
            classes += 'border-forge-crimson bg-forge-crimson/20 text-forge-parchment animate-shake';
          } else {
            classes += 'border-forge-border bg-forge-card text-forge-muted opacity-50';
          }

          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={selected !== null} className={classes}>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
