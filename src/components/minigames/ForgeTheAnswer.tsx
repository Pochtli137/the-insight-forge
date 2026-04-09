import { useState, useMemo } from 'react';
import type { ForgeData } from '../../types/game';

interface ForgeTheAnswerProps {
  data: ForgeData;
  onComplete: (correct: boolean) => void;
}

export default function ForgeTheAnswer({ data, onComplete }: ForgeTheAnswerProps) {
  const [filledBlanks, setFilledBlanks] = useState<(string | null)[]>(
    () => new Array(data.blanks.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const wordBank = useMemo(() => {
    const all = [...data.blanks, ...data.distractors];
    // Shuffle
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all;
  }, [data.blanks, data.distractors]);

  const usedWords = filledBlanks.filter((w): w is string => w !== null);

  const handleWordClick = (word: string) => {
    if (submitted) return;
    if (usedWords.includes(word)) return;

    // Find first empty blank
    const emptyIndex = filledBlanks.indexOf(null);
    if (emptyIndex === -1) return;

    const next = [...filledBlanks];
    next[emptyIndex] = word;
    setFilledBlanks(next);
  };

  const handleBlankClick = (index: number) => {
    if (submitted) return;
    const next = [...filledBlanks];
    next[index] = null;
    setFilledBlanks(next);
  };

  const handleForge = () => {
    if (filledBlanks.some((w) => w === null)) return;
    setSubmitted(true);
    const correct = filledBlanks.every((w, i) => w === data.blanks[i]);
    setTimeout(() => onComplete(correct), 1500);
  };

  // Split template by ___ to render with blank slots
  const parts = data.template.split('___');

  return (
    <div className="animate-fade-in-up">
      {/* Template with blanks */}
      <div className="mb-8 rounded border border-forge-border bg-forge-card p-6 font-serif text-2xl leading-relaxed text-forge-parchment">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <button
                onClick={() => handleBlankClick(i)}
                className={`mx-1 inline-block min-w-[100px] rounded border-b-2 px-2 py-1 text-center transition-all ${
                  filledBlanks[i]
                    ? submitted
                      ? filledBlanks[i] === data.blanks[i]
                        ? 'border-forge-teal bg-forge-teal/20 text-forge-parchment'
                        : 'border-forge-crimson bg-forge-crimson/20 text-forge-parchment'
                      : 'border-forge-gold bg-forge-gold/10 text-forge-gold cursor-pointer'
                    : 'border-forge-muted bg-forge-card text-forge-muted'
                }`}
              >
                {filledBlanks[i] ?? '\u00A0\u00A0\u00A0'}
              </button>
            )}
          </span>
        ))}
      </div>

      {/* Word bank */}
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {wordBank.map((word, i) => {
          const isUsed = usedWords.includes(word);
          return (
            <button
              key={i}
              onClick={() => handleWordClick(word)}
              disabled={isUsed || submitted}
              className={`rounded border px-3 py-1.5 text-base transition-all ${
                isUsed
                  ? 'border-forge-border bg-forge-card text-forge-muted opacity-30'
                  : 'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer'
              }`}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* Forge button */}
      {!submitted && (
        <div className="text-center">
          <button
            onClick={handleForge}
            disabled={filledBlanks.some((w) => w === null)}
            className="rounded bg-forge-gold px-8 py-3 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Forge!
          </button>
        </div>
      )}

      {submitted && (
        <p className="mt-4 text-center font-serif text-forge-muted">
          {filledBlanks.every((w, i) => w === data.blanks[i])
            ? 'Perfectly forged.'
            : 'The forge rejected your attempt.'}
        </p>
      )}
    </div>
  );
}
