import { useEffect } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { achievements } from '../../data/achievements';
import { useSound } from '../../hooks/useSound';

export default function AchievementToast() {
  const pendingAchievement = useGameStore((s) => s.pendingAchievement);
  const dismissAchievement = useGameStore((s) => s.dismissAchievement);
  const { play } = useSound();

  const achievement = pendingAchievement
    ? achievements.find((a) => a.id === pendingAchievement)
    : null;

  useEffect(() => {
    if (achievement) {
      play('achievement');
      const timer = setTimeout(() => {
        dismissAchievement();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [achievement, dismissAchievement, play]);

  if (!achievement) return null;

  return (
    <div className="animate-slide-in-down fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-lg border-2 border-forge-gold/60 bg-forge-card px-6 py-3 shadow-[0_0_20px_rgba(212,168,67,0.3)]">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{achievement.emoji}</span>
          <div>
            <p className="font-serif font-bold text-forge-gold">{achievement.name}</p>
            <p className="text-xs text-forge-muted">{achievement.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
