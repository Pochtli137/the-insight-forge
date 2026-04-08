import { useGameStore } from './stores/gameStore';
import JoinPage from './pages/JoinPage';
import GamePage from './pages/GamePage';

function App() {
  const phase = useGameStore((s) => s.phase);

  return (
    <div className="min-h-screen bg-forge-bg font-sans text-forge-parchment">
      {phase === 'join' ? <JoinPage /> : <GamePage />}
    </div>
  );
}

export default App;
