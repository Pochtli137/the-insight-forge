import { useState } from 'react';
import type { Question } from '../../types/game';

interface MultipleChoiceProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
  hideCorrect?: boolean;
}

export default function MultipleChoice({ question, onAnswer, disabled, hideCorrect }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (disabled) return;
    setSelected(index);
    const correct = index === question.correctAnswer;
    onAnswer(correct);
  };

  return (
    <div className="space-y-3">
      {question.options?.map((option, i) => {
        let classes =
          'w-full rounded border px-4 py-3 text-left transition-all duration-200 ';

        if (selected === null) {
          // Not yet answered
          classes += 'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer';
        } else if (i === question.correctAnswer && i === selected) {
          // User picked the correct answer
          classes += 'border-forge-teal bg-forge-teal/20 text-forge-parchment animate-correct';
        } else if (i === question.correctAnswer && !hideCorrect) {
          // Reveal the correct answer (not in boss fights)
          classes += 'border-forge-teal bg-forge-teal/20 text-forge-parchment animate-correct';
        } else if (i === selected) {
          // User picked a wrong answer
          classes += 'border-forge-crimson bg-forge-crimson/20 text-forge-parchment animate-shake';
        } else {
          // Other unselected options
          classes += 'border-forge-border bg-forge-card text-forge-parchment/80';
        }

        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={disabled}
            className={classes}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
