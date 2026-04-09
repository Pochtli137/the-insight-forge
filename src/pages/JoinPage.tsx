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
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Radial glow behind title */}
        <div
          className="absolute left-1/2 top-1/3 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse, rgba(212,168,67,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Bottom scene SVG */}
        <svg
          className="absolute bottom-0 left-0 h-[200px] w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground fog gradient */}
          <defs>
            <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="var(--color-forge-bg)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-forge-bg)" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1200" height="200" fill="url(#fog)" />

          {/* Left tower/pillar */}
          <g opacity="0.2" fill="var(--color-forge-gold)">
            <rect x="60" y="60" width="20" height="140" />
            <rect x="50" y="50" width="40" height="14" />
            <polygon points="55,50 70,20 85,50" />
            <rect x="64" y="80" width="4" height="8" opacity="0.6" />
            <rect x="72" y="80" width="4" height="8" opacity="0.6" />
            <rect x="64" y="100" width="4" height="8" opacity="0.6" />
            <rect x="72" y="100" width="4" height="8" opacity="0.6" />
          </g>

          {/* Left candle cluster */}
          <g opacity="0.18" fill="var(--color-forge-gold)">
            <rect x="160" y="120" width="6" height="60" />
            <polygon points="160,120 163,108 166,120" />
            <rect x="175" y="100" width="6" height="80" />
            <polygon points="175,100 178,86 181,100" />
            <rect x="148" y="135" width="6" height="45" />
            <polygon points="148,135 151,124 154,135" />
            <rect x="140" y="175" width="50" height="8" rx="2" />
          </g>

          {/* Left rune stones */}
          <g opacity="0.15" fill="var(--color-forge-gold)">
            <rect x="270" y="150" width="24" height="36" rx="4" />
            <line x1="282" y1="158" x2="282" y2="178" stroke="var(--color-forge-bg)" strokeWidth="2" />
            <line x1="278" y1="166" x2="286" y2="162" stroke="var(--color-forge-bg)" strokeWidth="2" />
            <rect x="300" y="158" width="20" height="30" rx="3" />
            <line x1="310" y1="164" x2="310" y2="182" stroke="var(--color-forge-bg)" strokeWidth="2" />
            <line x1="306" y1="174" x2="314" y2="170" stroke="var(--color-forge-bg)" strokeWidth="2" />
          </g>

          {/* Center anvil / forge */}
          <g opacity="0.25" fill="var(--color-forge-gold)">
            {/* Anvil */}
            <path d="M560,170 L560,155 Q560,145 570,145 L630,145 Q640,145 640,155 L640,170 Z" />
            <rect x="555" y="170" width="90" height="10" rx="2" />
            <rect x="575" y="180" width="50" height="20" />
            {/* Hammer */}
            <rect x="610" y="110" width="6" height="40" transform="rotate(-30 613 130)" />
            <rect x="600" y="100" width="26" height="14" rx="3" transform="rotate(-30 613 107)" />
            {/* Sparks */}
            <circle cx="585" cy="130" r="1.5" opacity="0.5" />
            <circle cx="575" cy="122" r="1" opacity="0.4" />
            <circle cx="595" cy="118" r="1.2" opacity="0.4" />
            <circle cx="565" cy="128" r="0.8" opacity="0.3" />
            <circle cx="590" cy="112" r="1" opacity="0.3" />
          </g>

          {/* Center data scroll */}
          <g opacity="0.15" fill="var(--color-forge-gold)">
            <path d="M480,155 Q476,148 480,148 L520,148 L520,190 L480,190 Z" />
            <path d="M520,148 Q524,148 524,155 L524,190 Q524,193 520,190" />
            <line x1="486" y1="158" x2="516" y2="158" stroke="var(--color-forge-bg)" strokeWidth="1" />
            <line x1="486" y1="164" x2="516" y2="164" stroke="var(--color-forge-bg)" strokeWidth="1" />
            <line x1="486" y1="170" x2="510" y2="170" stroke="var(--color-forge-bg)" strokeWidth="1" />
            <line x1="486" y1="176" x2="514" y2="176" stroke="var(--color-forge-bg)" strokeWidth="1" />
          </g>

          {/* Right crystal cluster */}
          <g opacity="0.18" fill="var(--color-forge-teal)">
            <polygon points="880,190 870,140 890,130 910,190" />
            <polygon points="905,190 898,155 912,148 925,190" />
            <polygon points="860,190 855,165 870,160 878,190" />
            <polygon points="920,190 918,170 930,165 938,190" />
          </g>

          {/* Right open tome */}
          <g opacity="0.15" fill="var(--color-forge-gold)">
            <path d="M980,165 Q1000,158 1020,165 L1020,195 Q1000,188 980,195 Z" />
            <path d="M1020,165 Q1040,158 1060,165 L1060,195 Q1040,188 1020,195 Z" />
            <line x1="1020" y1="165" x2="1020" y2="195" stroke="var(--color-forge-bg)" strokeWidth="1" />
          </g>

          {/* Right tower/pillar */}
          <g opacity="0.2" fill="var(--color-forge-gold)">
            <rect x="1120" y="60" width="20" height="140" />
            <rect x="1110" y="50" width="40" height="14" />
            <polygon points="1115,50 1130,20 1145,50" />
            <rect x="1124" y="80" width="4" height="8" opacity="0.6" />
            <rect x="1132" y="80" width="4" height="8" opacity="0.6" />
            <rect x="1124" y="100" width="4" height="8" opacity="0.6" />
            <rect x="1132" y="100" width="4" height="8" opacity="0.6" />
          </g>

          {/* Far left skull */}
          <g opacity="0.1" fill="var(--color-forge-gold)">
            <circle cx="20" cy="175" r="12" />
            <rect x="14" y="185" width="12" height="8" />
            <circle cx="16" cy="173" r="2.5" fill="var(--color-forge-bg)" />
            <circle cx="24" cy="173" r="2.5" fill="var(--color-forge-bg)" />
          </g>

          {/* Far right eye */}
          <g opacity="0.12" fill="var(--color-forge-gold)">
            <path d="M1170,170 Q1185,155 1200,170 Q1185,163 1170,170 Z" />
            <circle cx="1185" cy="168" r="3" />
          </g>

          {/* Scattered ground line details */}
          <line x1="0" y1="195" x2="1200" y2="195" stroke="var(--color-forge-border)" strokeWidth="0.5" opacity="0.3" />
          <g opacity="0.08" fill="var(--color-forge-gold)">
            <circle cx="400" cy="192" r="3" />
            <circle cx="420" cy="194" r="2" />
            <circle cx="750" cy="193" r="2.5" />
            <circle cx="770" cy="195" r="1.8" />
            <circle cx="200" cy="194" r="2" />
          </g>
        </svg>

        {/* Top corner runes */}
        <svg className="absolute left-6 top-6 h-16 w-16 opacity-[0.08]" viewBox="0 0 60 60" fill="var(--color-forge-gold)">
          <circle cx="30" cy="30" r="28" fill="none" stroke="var(--color-forge-gold)" strokeWidth="1" />
          <circle cx="30" cy="30" r="22" fill="none" stroke="var(--color-forge-gold)" strokeWidth="0.5" />
          <line x1="30" y1="4" x2="30" y2="56" stroke="var(--color-forge-gold)" strokeWidth="0.5" />
          <line x1="4" y1="30" x2="56" y2="30" stroke="var(--color-forge-gold)" strokeWidth="0.5" />
          <line x1="12" y1="12" x2="48" y2="48" stroke="var(--color-forge-gold)" strokeWidth="0.5" />
          <line x1="48" y1="12" x2="12" y2="48" stroke="var(--color-forge-gold)" strokeWidth="0.5" />
        </svg>

        <svg className="absolute right-6 top-6 h-16 w-16 opacity-[0.08]" viewBox="0 0 60 60" fill="var(--color-forge-gold)">
          <polygon points="30,2 58,30 30,58 2,30" fill="none" stroke="var(--color-forge-gold)" strokeWidth="1" />
          <polygon points="30,10 50,30 30,50 10,30" fill="none" stroke="var(--color-forge-gold)" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="6" fill="none" stroke="var(--color-forge-gold)" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="2" />
        </svg>

        {/* Side vertical lines */}
        <div className="absolute left-12 top-[15%] h-[30%] w-px bg-gradient-to-b from-transparent via-[var(--color-forge-gold)]/10 to-transparent" />
        <div className="absolute right-12 top-[15%] h-[30%] w-px bg-gradient-to-b from-transparent via-[var(--color-forge-gold)]/10 to-transparent" />
      </div>

      {/* Main content */}
      <div className="animate-fade-in-up relative z-10 text-center">
        {/* Decorative line above title */}
        <div className="mx-auto mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-forge-gold/40" />
          <svg className="h-4 w-4 opacity-40" viewBox="0 0 20 20" fill="var(--color-forge-gold)">
            <polygon points="10,0 20,10 10,20 0,10" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-forge-gold/40" />
        </div>

        <h1 className="animate-glow mb-2 font-serif text-6xl font-bold text-forge-gold md:text-8xl">
          The Insight Forge
        </h1>

        {/* Decorative line below title */}
        <div className="mx-auto mb-4 flex items-center justify-center gap-2">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-forge-gold/30" />
          <div className="h-1 w-1 rounded-full bg-forge-gold/40" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-forge-gold/30" />
        </div>

        <p className="mb-3 font-serif text-base tracking-[0.3em] text-forge-gold-dim uppercase">
          Data Analytics Quest
        </p>
        <p className="mb-14 text-2xl text-forge-muted">
          Five realms. Fifty trials. One forge to rule your insights.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-6">
          <div>
            <label htmlFor="guild-name" className="mb-2 block font-serif text-base text-forge-muted">
              Name your guild
            </label>
            <input
              id="guild-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter guild name..."
              autoFocus
              className="w-full rounded border border-forge-border bg-forge-card/80 px-4 py-3 text-forge-parchment placeholder-forge-muted outline-none transition-colors focus:border-forge-gold focus:shadow-[0_0_12px_rgba(212,168,67,0.15)]"
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

        {/* Bottom flavor text */}
        <p className="mt-10 font-serif text-base italic text-forge-muted/50">
          "The data does not yield its secrets to the faint of heart."
        </p>
      </div>
    </div>
  );
}
