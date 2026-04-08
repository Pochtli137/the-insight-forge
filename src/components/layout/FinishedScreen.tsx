import { useGameStore } from '../../stores/gameStore';
import { realms } from '../../data/realms';
import { achievements } from '../../data/achievements';
import RuneDisplay from '../shared/RuneDisplay';

export default function FinishedScreen() {
  const groupName = useGameStore((s) => s.groupName);
  const score = useGameStore((s) => s.score);
  const realmScores = useGameStore((s) => s.realmScores);
  const getTitle = useGameStore((s) => s.getTitle);
  const unlockedAchievements = useGameStore((s) => s.unlockedAchievements);
  const runeSegments = useGameStore((s) => s.runeSegments);

  const title = getTitle();

  const completeRuneCount = realms.filter((realm) => {
    const segments = runeSegments[realm.id];
    return segments && segments.every(Boolean);
  }).length;

  const earnedAchievements = achievements.filter((a) =>
    unlockedAchievements.includes(a.id)
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="animate-fade-in-up mx-auto max-w-lg text-center">
        <h1 className="mb-2 font-serif text-4xl font-bold text-forge-gold md:text-5xl">
          The Forge Falls Silent
        </h1>
        <p className="mb-8 text-forge-muted">The journey is complete.</p>

        <div className="mb-6 rounded border border-forge-gold/30 bg-forge-card p-6">
          <p className="mb-1 text-sm text-forge-muted">Guild</p>
          <p className="mb-4 font-serif text-2xl font-bold text-forge-parchment">{groupName}</p>

          <p className="mb-1 text-sm text-forge-muted">Title earned</p>
          <p className="mb-4 font-serif text-xl text-forge-gold">{title}</p>

          <p className="mb-1 text-sm text-forge-muted">Total score</p>
          <p className="animate-glow inline-block rounded px-4 py-1 font-serif text-3xl font-bold text-forge-gold">
            {score}
          </p>
        </div>

        <div className="mb-8 rounded border border-forge-border bg-forge-card p-4">
          <h3 className="mb-3 text-sm font-semibold text-forge-muted">Realm Breakdown</h3>
          <div className="space-y-2">
            {realms.map((realm) => (
              <div key={realm.id} className="flex items-center justify-between text-sm">
                <span className="text-forge-parchment/80">
                  <span className="mr-2">{realm.icon}</span>
                  {realm.name}
                </span>
                <span className="font-semibold text-forge-gold">
                  {realmScores[realm.id] ?? 0}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Runes Collected */}
        <div className="mb-8 rounded border border-forge-gold/20 bg-forge-card p-4">
          <h3 className="mb-1 text-sm font-semibold text-forge-muted">Runes Collected</h3>
          <p className="mb-4 text-xs text-forge-gold-dim">
            {completeRuneCount} of 5 complete
          </p>
          <div className="space-y-3">
            {realms.map((realm) => (
              <div key={realm.id} className="flex items-center gap-3">
                <span className="text-lg">{realm.icon}</span>
                <div className="flex-1">
                  <RuneDisplay realm={realm.id} compact />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Unlocked */}
        {earnedAchievements.length > 0 && (
          <div className="mb-8 rounded border border-forge-gold/20 bg-forge-card p-4">
            <h3 className="mb-4 text-sm font-semibold text-forge-muted">Achievements Unlocked</h3>
            <div className="grid grid-cols-2 gap-3">
              {earnedAchievements.map((ach) => (
                <div
                  key={ach.id}
                  className="rounded border border-forge-gold/20 bg-forge-bg p-3 text-center"
                >
                  <span className="text-2xl">{ach.emoji}</span>
                  <p className="mt-1 font-serif text-sm font-bold text-forge-gold">{ach.name}</p>
                  <p className="text-xs text-forge-muted">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-10 space-y-4 font-serif italic text-forge-parchment/60">
          <p>You entered as designers who feared the numbers. You leave as analysts who wield them.</p>
          <p>The tool never mattered. You did.</p>
          <p>The data was never the enemy. Ignorance was.</p>
          <p>Someone will ask you: how did you learn to do that?</p>
          <p>And you will say: let me show you.</p>
          <p className="text-forge-gold/80">Now go forge something real.</p>
        </div>

        <div className="rounded border border-forge-border bg-forge-card/60 p-6">
          <p className="mb-2 text-xs font-semibold tracking-widest text-forge-muted uppercase">The next realm awaits</p>
          <p className="mb-4 font-serif text-xl text-forge-gold">Storytelling</p>
          <p className="font-serif italic text-forge-parchment/50">
            You have the data. You have the insights. But without a story, they are just numbers on a screen.
            The forge gave you sight. The next realm will give you voice.
          </p>
        </div>
      </div>
    </div>
  );
}
