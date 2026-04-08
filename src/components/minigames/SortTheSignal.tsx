import { useState, useMemo } from 'react';
import type { SortData } from '../../types/game';

interface SortTheSignalProps {
  data: SortData;
  onComplete: (correct: boolean) => void;
}

export default function SortTheSignal({ data, onComplete }: SortTheSignalProps) {
  const [assignments, setAssignments] = useState<Record<number, number>>({});
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const shuffledItems = useMemo(() => {
    const indexed = data.items.map((item, i) => ({ ...item, originalIndex: i }));
    for (let i = indexed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }
    return indexed;
  }, [data.items]);

  const handleItemClick = (index: number) => {
    if (submitted) return;
    setSelectedItem(index);
  };

  const handleBucketClick = (bucketIndex: number) => {
    if (submitted || selectedItem === null) return;
    setAssignments((prev) => ({ ...prev, [selectedItem]: bucketIndex }));
    setSelectedItem(null);
  };

  const handleCheck = () => {
    setSubmitted(true);
    const correct = shuffledItems.every(
      (item) => assignments[item.originalIndex] === item.bucket,
    );
    setTimeout(() => onComplete(correct), 1500);
  };

  const allAssigned = shuffledItems.every(
    (item) => assignments[item.originalIndex] !== undefined,
  );

  return (
    <div className="animate-fade-in-up">
      {/* Buckets */}
      <div className="mb-6 grid gap-3" style={{ gridTemplateColumns: `repeat(${data.buckets.length}, 1fr)` }}>
        {data.buckets.map((bucket, i) => (
          <button
            key={i}
            onClick={() => handleBucketClick(i)}
            className={`rounded border px-3 py-4 text-center font-serif font-semibold transition-all ${
              selectedItem !== null
                ? 'border-forge-gold bg-forge-gold/10 text-forge-gold cursor-pointer hover:bg-forge-gold/20'
                : 'border-forge-border bg-forge-card text-forge-muted'
            }`}
          >
            {bucket}
            {/* Show items sorted into this bucket */}
            <div className="mt-3 space-y-1">
              {shuffledItems
                .filter((item) => assignments[item.originalIndex] === i)
                .map((item) => {
                  let itemClass = 'text-xs rounded px-2 py-1 ';
                  if (submitted) {
                    itemClass +=
                      item.bucket === i
                        ? 'bg-forge-teal/20 text-forge-parchment'
                        : 'bg-forge-crimson/20 text-forge-parchment';
                  } else {
                    itemClass += 'bg-forge-border/50 text-forge-parchment';
                  }
                  return (
                    <div key={item.originalIndex} className={itemClass}>
                      {item.text}
                    </div>
                  );
                })}
            </div>
          </button>
        ))}
      </div>

      {/* Unsorted items */}
      <div className="mb-6 space-y-2">
        {shuffledItems
          .filter((item) => assignments[item.originalIndex] === undefined)
          .map((item) => (
            <button
              key={item.originalIndex}
              onClick={() => handleItemClick(item.originalIndex)}
              className={`w-full rounded border px-4 py-2 text-left text-sm transition-all ${
                selectedItem === item.originalIndex
                  ? 'border-forge-gold bg-forge-gold/10 text-forge-gold'
                  : 'border-forge-border bg-forge-card text-forge-parchment hover:border-forge-gold cursor-pointer'
              }`}
            >
              {item.text}
            </button>
          ))}
      </div>

      {/* Check button */}
      {!submitted && allAssigned && (
        <div className="text-center">
          <button
            onClick={handleCheck}
            className="rounded bg-forge-gold px-8 py-3 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
          >
            Check
          </button>
        </div>
      )}

      {submitted && (
        <p className="mt-4 text-center font-serif text-forge-muted">
          {shuffledItems.every((item) => assignments[item.originalIndex] === item.bucket)
            ? 'Signal sorted from noise.'
            : 'The signal was lost in the noise.'}
        </p>
      )}
    </div>
  );
}
