import { useGameStore } from '../../stores/gameStore';
import { realms } from '../../data/realms';
import RuneDisplay from '../shared/RuneDisplay';

export default function RealmComplete() {
  const currentRealm = useGameStore((s) => s.currentRealm);
  const score = useGameStore((s) => s.score);
  const streak = useGameStore((s) => s.streak);
  const realmScores = useGameStore((s) => s.realmScores);
  const nextRealm = useGameStore((s) => s.nextRealm);
  const finishGame = useGameStore((s) => s.finishGame);

  const realm = realms.find((r) => r.id === currentRealm);
  const realmScore = realmScores[currentRealm] ?? 0;
  const isLast = currentRealm >= 5;

  if (!realm) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="animate-fade-in-up mx-auto max-w-lg text-center">
        {/* Rune at the top */}
        <div className="mb-6 rounded border border-forge-gold/20 bg-forge-card p-4">
          <p className="mb-2 text-xs font-semibold tracking-widest text-forge-muted uppercase">Rune of Insight</p>
          <RuneDisplay realm={currentRealm} />
        </div>

        <div className="mb-4 text-5xl">{realm.icon}</div>
        <h2 className="mb-2 font-serif text-3xl font-bold text-forge-gold">{realm.name}</h2>
        <p className="mb-8 text-lg text-forge-muted">Realm Complete</p>

        <div className="mb-8 space-y-3 rounded border border-forge-border bg-forge-card p-6">
          <div className="flex items-center justify-between">
            <span className="text-forge-muted">Realm score</span>
            <span className="text-xl font-bold text-forge-gold">{realmScore}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-forge-muted">Total score</span>
            <span className="text-xl font-bold text-forge-parchment">{score}</span>
          </div>
          {streak >= 2 && (
            <div className="flex items-center justify-between">
              <span className="text-forge-muted">Current streak</span>
              <span className="text-xl font-bold text-forge-gold">
                &#x1F525; {streak}
              </span>
            </div>
          )}
        </div>

        <p className="mb-10 font-serif italic text-forge-parchment/70">{realm.narrativeOutro}</p>

        <button
          onClick={isLast ? finishGame : nextRealm}
          className="rounded bg-forge-gold px-8 py-3 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
        >
          {isLast ? 'See Final Results' : 'Continue to next realm'}
        </button>
      </div>
    </div>
  );
}
