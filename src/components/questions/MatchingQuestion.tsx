import { useState } from 'react';
import type { Question } from '../../types/game';

interface MatchingQuestionProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
}

const pairColors = [
  'bg-forge-gold/20 border-forge-gold',
  'bg-forge-teal/20 border-forge-teal',
  'bg-forge-crimson/20 border-forge-crimson',
  'bg-purple-900/30 border-purple-500',
  'bg-blue-900/30 border-blue-500',
  'bg-orange-900/30 border-orange-500',
];

export default function MatchingQuestion({ question, onAnswer, disabled }: MatchingQuestionProps) {
  const left = question.leftColumn ?? [];
  const right = question.rightColumn ?? [];
  const correctPairs = question.correctPairs ?? [];

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [pairs, setPairs] = useState<[number, number][]>([]);
  const [submitted, setSubmitted] = useState(false);

  const getPairIndex = (side: 'left' | 'right', itemIndex: number): number => {
    return pairs.findIndex(([l, r]) =>
      side === 'left' ? l === itemIndex : r === itemIndex,
    );
  };

  const handleLeftClick = (index: number) => {
    if (disabled || submitted) return;
    // If already paired, unpair it
    const existing = getPairIndex('left', index);
    if (existing !== -1) {
      setPairs((prev) => prev.filter((_, i) => i !== existing));
      return;
    }
    setSelectedLeft(index);
  };

  const handleRightClick = (index: number) => {
    if (disabled || submitted || selectedLeft === null) return;
    // If right already paired, remove old pair
    const existingRight = getPairIndex('right', index);
    if (existingRight !== -1) {
      setPairs((prev) => prev.filter((_, i) => i !== existingRight));
    }
    // Remove any existing pair for the selected left
    const existingLeft = getPairIndex('left', selectedLeft);
    const newPairs =
      existingLeft !== -1
        ? pairs.filter((_, i) => i !== existingLeft)
        : [...pairs];

    newPairs.push([selectedLeft, index]);
    setPairs(newPairs);
    setSelectedLeft(null);
  };

  const handleSubmit = () => {
    if (pairs.length !== left.length) return;
    setSubmitted(true);

    const correct = correctPairs.every(([cl, cr]) =>
      pairs.some(([pl, pr]) => pl === cl && pr === cr),
    );
    onAnswer(correct);
  };

  return (
    <div>
      <p className="mb-4 text-center text-sm text-forge-muted">
        Tap a left item, then its matching right item
      </p>

      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-2">
          {left.map((item, i) => {
            const pairIdx = getPairIndex('left', i);
            const isPaired = pairIdx !== -1;
            const isActive = selectedLeft === i;

            let classes =
              'w-full rounded border px-3 py-2 text-left text-sm transition-all duration-200 ';

            if (isPaired) {
              classes += pairColors[pairIdx % pairColors.length];
            } else if (isActive) {
              classes += 'border-forge-gold bg-forge-gold/10 text-forge-parchment';
            } else {
              classes +=
                'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer';
            }

            return (
              <button
                key={i}
                onClick={() => handleLeftClick(i)}
                disabled={disabled}
                className={classes}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          {right.map((item, i) => {
            const pairIdx = getPairIndex('right', i);
            const isPaired = pairIdx !== -1;

            let classes =
              'w-full rounded border px-3 py-2 text-left text-sm transition-all duration-200 ';

            if (isPaired) {
              classes += pairColors[pairIdx % pairColors.length];
            } else {
              classes +=
                'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer';
            }

            return (
              <button
                key={i}
                onClick={() => handleRightClick(i)}
                disabled={disabled}
                className={classes}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {!submitted && pairs.length === left.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="rounded bg-forge-gold px-6 py-2 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
