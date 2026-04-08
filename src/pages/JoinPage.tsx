import { useState } from 'react';
import { useGameStore } from '../stores/gameStore';

export default function JoinPage() {
  const [name, setName] = useState('');
  const setGroupName = useGameStore((s) => s.setGroupName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setGroupName(name.trim());
    useGameStore.setState({ phase: 'realm-intro' });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="animate-fade-in-up text-center">
        <h1 className="animate-glow mb-4 font-serif text-5xl font-bold text-forge-gold md:text-7xl">
          The Insight Forge
        </h1>
        <p className="mb-12 text-lg text-forge-muted">
          A quest through six realms of data analytics
        </p>

        <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-6">
          <div>
            <label htmlFor="guild-name" className="mb-2 block font-serif text-sm text-forge-muted">
              Name your guild
            </label>
            <input
              id="guild-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter guild name..."
              autoFocus
              className="w-full rounded border border-forge-border bg-forge-card px-4 py-3 text-forge-parchment placeholder-forge-muted outline-none transition-colors focus:border-forge-gold"
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full rounded bg-forge-gold px-6 py-3 font-semibold text-forge-bg transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Begin the Journey
          </button>
        </form>
      </div>
    </div>
  );
}
