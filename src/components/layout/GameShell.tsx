import { useGameStore } from '../../stores/gameStore';
import { realms } from '../../data/realms';
import RuneDisplay from '../shared/RuneDisplay';
import RealmDecoration from '../shared/RealmDecoration';

interface GameShellProps {
  children: React.ReactNode;
}

export default function GameShell({ children }: GameShellProps) {
  const currentRealm = useGameStore((s) => s.currentRealm);
  const currentQuestionIndex = useGameStore((s) => s.currentQuestionIndex);
  const score = useGameStore((s) => s.score);
  const streak = useGameStore((s) => s.streak);
  const groupName = useGameStore((s) => s.groupName);
  const getRealmQuestions = useGameStore((s) => s.getRealmQuestions);
  const getTitle = useGameStore((s) => s.getTitle);

  const realm = realms.find((r) => r.id === currentRealm);
  const totalQuestions = getRealmQuestions().length;
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  const title = getTitle();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-forge-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{realm?.icon}</span>
          <div>
            <span className="font-serif text-lg text-forge-gold">{realm?.name}</span>
            <p className="font-serif text-xs text-forge-gold-dim">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {streak >= 3 && (
            <span className="animate-flicker text-sm">
              <span className="mr-1">&#x1F525;</span>
              {streak}
            </span>
          )}
          <span className="text-sm font-semibold text-forge-parchment">
            {score} pts
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-forge-border">
        <div
          className="h-full bg-forge-gold transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Rune display */}
      <div className="border-b border-forge-border/50 bg-forge-card/50 px-4 py-2">
        <RuneDisplay realm={currentRealm} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-4 py-8 pb-[120px]">
        {children}
      </div>

      {/* Group name */}
      <div className="px-4 pb-[110px] text-right text-xs text-forge-muted">
        {groupName}
      </div>

      {/* Accumulating dark fantasy decorations */}
      <RealmDecoration realm={currentRealm} />
    </div>
  );
}
