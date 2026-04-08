import { useGameStore } from '../../stores/gameStore';
import { realmDecorations } from '../../data/realmDecorations';
import { questions } from '../../data/questions';

interface Props {
  realm: number;
}

export default function RealmDecoration({ realm }: Props) {
  const answers = useGameStore((s) => s.answers);

  const realmQuestions = questions.filter((q) => q.realm === realm);
  const answeredCount = realmQuestions.filter((q) => answers[q.id]).length;

  const decorations = realmDecorations[realm];
  if (!decorations) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-10"
      style={{ height: '100px' }}
      aria-hidden="true"
    >
      {/* Top fade so it blends into dark background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-forge-bg) 40%)',
        }}
      />
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="xMidYMax meet"
        className="relative h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle ground line */}
        <line
          x1="0" y1="96" x2="1000" y2="96"
          stroke="var(--color-forge-border)"
          strokeWidth="0.5"
          opacity="0.2"
        />

        {decorations.map((deco, index) =>
          index < answeredCount ? (
            <g
              key={index}
              transform={`translate(${deco.x}, ${deco.y})`}
              opacity={deco.opacity}
            >
              <path d={deco.path} fill={deco.fill} />
            </g>
          ) : null
        )}
      </svg>
    </div>
  );
}
