import { useState } from 'react';
import type { Question } from '../../types/game';

interface TrueFalseProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
}

export default function TrueFalse({ question, onAnswer, disabled }: TrueFalseProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const options = ['True', 'False'];

  const handleClick = (index: number) => {
    if (disabled) return;
    setSelected(index);
    const correct = index === question.correctAnswer;
    onAnswer(correct);
  };

  return (
    <div className="flex gap-4">
      {options.map((label, i) => {
        let classes =
          'flex-1 rounded border px-6 py-4 text-center text-2xl font-semibold transition-all duration-200 ';

        if (selected === null) {
          classes += 'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer';
        } else if (i === question.correctAnswer) {
          classes += 'border-forge-teal bg-forge-teal/20 text-forge-parchment animate-correct';
        } else if (i === selected) {
          classes += 'border-forge-crimson bg-forge-crimson/20 text-forge-parchment animate-shake';
        } else {
          classes += 'border-forge-border bg-forge-card text-forge-parchment/80';
        }

        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={disabled}
            className={classes}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
