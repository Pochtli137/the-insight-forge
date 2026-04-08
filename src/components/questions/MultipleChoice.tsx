import { useState } from 'react';
import type { Question } from '../../types/game';

interface MultipleChoiceProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
}

export default function MultipleChoice({ question, onAnswer, disabled }: MultipleChoiceProps) {
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
        } else if (i === question.correctAnswer) {
          // This is the correct answer
          classes += 'border-forge-teal bg-forge-teal/20 text-forge-parchment animate-correct';
        } else if (i === selected) {
          // User picked this wrong answer
          classes += 'border-forge-crimson bg-forge-crimson/20 text-forge-parchment animate-shake';
        } else {
          // Other unselected options
          classes += 'border-forge-border bg-forge-card text-forge-muted opacity-50';
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
