import { useGameStore } from '../../stores/gameStore';
import type { FlashData, ForgeData, SortData } from '../../types/game';
import MemoryFlash from './MemoryFlash';
import ForgeTheAnswer from './ForgeTheAnswer';
import SortTheSignal from './SortTheSignal';

export default function MiniGameRouter() {
  const currentMiniGame = useGameStore((s) => s.currentMiniGame);
  const completeMiniGame = useGameStore((s) => s.completeMiniGame);

  if (!currentMiniGame) return null;

  const { miniGameType, miniGameData } = currentMiniGame;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-2xl">
        <p className="mb-8 text-center font-serif text-lg text-forge-gold">
          Challenge: Learn the Answer
        </p>

        {miniGameType === 'flash' && (
          <MemoryFlash data={miniGameData as FlashData} onComplete={completeMiniGame} />
        )}
        {miniGameType === 'forge' && (
          <ForgeTheAnswer data={miniGameData as ForgeData} onComplete={completeMiniGame} />
        )}
        {miniGameType === 'sort' && (
          <SortTheSignal data={miniGameData as SortData} onComplete={completeMiniGame} />
        )}
      </div>
    </div>
  );
}
