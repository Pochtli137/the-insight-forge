import { useState } from 'react';

interface NumericInputProps {
  correctValue: number;
  tolerance: number;
  unit?: string;
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
}

export default function NumericInput({ correctValue, tolerance, unit, onAnswer, disabled }: NumericInputProps) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (disabled || submitted || value.trim() === '') return;
    const parsed = parseFloat(value.replace(',', '.'));
    if (isNaN(parsed)) return;
    const correct = Math.abs(parsed - correctValue) <= tolerance;
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mx-auto max-w-xs">
        <div className="flex items-center gap-3">
          <input
            type="text"
            inputMode="decimal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled || submitted}
            placeholder="0.0"
            className={`w-full rounded border px-4 py-3 text-center font-serif text-3xl transition-all outline-none ${
              submitted
                ? isCorrect
                  ? 'border-forge-teal bg-forge-teal/20 text-forge-parchment animate-correct'
                  : 'border-forge-crimson bg-forge-crimson/20 text-forge-parchment animate-shake'
                : 'border-forge-border bg-forge-card text-forge-parchment focus:border-forge-gold'
            }`}
          />
          {unit && (
            <span className="font-serif text-3xl text-forge-muted">{unit}</span>
          )}
        </div>

        {!submitted && value.trim() !== '' && (
          <div className="mt-4 text-center">
            <button
              onClick={handleSubmit}
              className="rounded bg-forge-gold px-8 py-3 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
            >
              Submit
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
