import { useState, useMemo } from 'react';
import type { Question } from '../../types/game';

interface OrderingQuestionProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
}

export default function OrderingQuestion({ question, onAnswer, disabled }: OrderingQuestionProps) {
  const items = question.items ?? [];
  const correctOrder = question.correctOrder ?? [];

  // Shuffle display order so items don't appear in the correct sequence
  const displayOrder = useMemo(() => {
    const indices = items.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [items]);

  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleTap = (index: number) => {
    if (disabled || submitted) return;
    if (selectedOrder.includes(index)) {
      // Deselect: remove this and everything after it
      setSelectedOrder((prev) => prev.slice(0, prev.indexOf(index)));
    } else {
      const next = [...selectedOrder, index];
      setSelectedOrder(next);

      // Auto-check when all items are selected
      if (next.length === items.length) {
        setSubmitted(true);
        const correct = next.every((val, i) => val === correctOrder[i]);
        onAnswer(correct);
      }
    }
  };

  return (
    <div>
      <p className="mb-4 text-center text-base text-forge-muted">
        Tap items in the correct order
      </p>
      <div className="space-y-3">
        {displayOrder.map((originalIdx) => {
          const position = selectedOrder.indexOf(originalIdx);
          const isSelected = position !== -1;

          let classes =
            'w-full rounded border px-4 py-3 text-left transition-all duration-200 ';

          if (!submitted) {
            if (isSelected) {
              classes += 'border-forge-gold bg-forge-gold/10 text-forge-parchment';
            } else {
              classes += 'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer';
            }
          } else {
            // After submission, show correct/incorrect
            const correctPosition = correctOrder.indexOf(originalIdx);
            const userPosition = position;
            if (correctPosition === userPosition) {
              classes += 'border-forge-teal bg-forge-teal/20 text-forge-parchment';
            } else {
              classes += 'border-forge-crimson bg-forge-crimson/20 text-forge-parchment';
            }
          }

          return (
            <button
              key={originalIdx}
              onClick={() => handleTap(originalIdx)}
              disabled={disabled}
              className={classes}
            >
              <span className="mr-3 inline-block w-6 text-center font-semibold text-forge-gold">
                {isSelected ? position + 1 : ''}
              </span>
              {items[originalIdx]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
