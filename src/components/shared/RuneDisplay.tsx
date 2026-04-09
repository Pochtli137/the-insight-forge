import { useEffect, useRef } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { realms } from '../../data/realms';
import { useSound } from '../../hooks/useSound';

interface RuneDisplayProps {
  realm: number;
  compact?: boolean;
}

function splitIntoSegments(phrase: string, count: number): string[] {
  const chars = phrase.split('');
  const segments: string[] = [];
  const baseSize = Math.floor(chars.length / count);
  let remainder = chars.length % count;
  let idx = 0;

  for (let i = 0; i < count; i++) {
    const size = baseSize + (remainder > 0 ? 1 : 0);
    if (remainder > 0) remainder--;
    segments.push(chars.slice(idx, idx + size).join(''));
    idx += size;
  }

  return segments;
}

export default function RuneDisplay({ realm, compact = false }: RuneDisplayProps) {
  const runeSegments = useGameStore((s) => s.runeSegments);
  const realmData = realms.find((r) => r.id === realm);
  const { play } = useSound();
  const prevRevealedCount = useRef(0);

  const segments = runeSegments[realm] || [];
  const phrase = realmData?.rune || '';
  const textSegments = splitIntoSegments(phrase, 10);

  const revealedCount = segments.filter(Boolean).length;

  useEffect(() => {
    if (revealedCount > prevRevealedCount.current && prevRevealedCount.current > 0) {
      if (revealedCount === 10) {
        play('rune-complete');
      } else {
        play('rune-segment');
      }
    }
    prevRevealedCount.current = revealedCount;
  }, [revealedCount, play]);

  const allRevealed = segments.length > 0 && segments.every(Boolean);

  return (
    <div className={`font-mono tracking-wider ${compact ? 'text-base' : 'text-base'}`}>
      <div className="flex flex-wrap justify-center gap-0">
        {textSegments.map((seg, i) => {
          const isRevealed = segments[i] === true;
          return (
            <span
              key={i}
              className={`inline-block transition-all duration-500 ${
                isRevealed
                  ? `text-forge-gold ${revealedCount > 0 ? 'animate-rune-glow' : ''}`
                  : 'text-forge-muted/40'
              }`}
            >
              {isRevealed ? seg : '▓'.repeat(seg.length)}
            </span>
          );
        })}
      </div>
      {allRevealed && !compact && (
        <div className="mt-1 text-center">
          <span className="animate-glow inline-block rounded-full border border-forge-gold/30 px-3 py-0.5 text-base text-forge-gold">
            Rune Complete!
          </span>
        </div>
      )}
    </div>
  );
}
