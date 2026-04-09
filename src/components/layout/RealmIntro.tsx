import { useState, useEffect } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { realms } from '../../data/realms';

export default function RealmIntro() {
  const currentRealm = useGameStore((s) => s.currentRealm);
  const startRealm = useGameStore((s) => s.startRealm);

  const realm = realms.find((r) => r.id === currentRealm);
  const lines = realm?.narrativeIntro.split('\n').filter((l) => l.trim()) ?? [];
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 800);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, lines.length]);

  if (!realm) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-lg text-center">
        <div className="animate-fade-in-up mb-6 text-7xl">{realm.icon}</div>
        <h2 className="animate-fade-in-up mb-2 font-serif text-4xl font-bold text-forge-gold">
          {realm.name}
        </h2>
        <p className="animate-fade-in-up mb-10 text-forge-muted">{realm.subtitle}</p>

        <div className="mb-10 space-y-4 text-left">
          {lines.map((line, i) => (
            <p
              key={i}
              className="font-serif italic text-forge-parchment/80 transition-opacity duration-700"
              style={{ opacity: i < visibleLines ? 1 : 0 }}
            >
              {line}
            </p>
          ))}
        </div>

        {visibleLines >= lines.length && (
          <button
            onClick={() => startRealm(currentRealm)}
            className="animate-fade-in-up rounded bg-forge-gold px-8 py-3 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
          >
            Enter the Realm
          </button>
        )}
      </div>
    </div>
  );
}
