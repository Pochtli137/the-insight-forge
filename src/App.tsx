import { useGameStore } from './stores/gameStore';
import JoinPage from './pages/JoinPage';
import GamePage from './pages/GamePage';
import AchievementToast from './components/shared/AchievementToast';

function App() {
  const phase = useGameStore((s) => s.phase);

  return (
    <div className="min-h-screen bg-forge-bg font-sans text-forge-parchment">
      <AchievementToast />
      {phase === 'join' ? <JoinPage /> : <GamePage />}
    </div>
  );
}

export default App;
