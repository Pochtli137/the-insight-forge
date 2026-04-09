import { useGameStore } from '../stores/gameStore';
import RealmIntro from '../components/layout/RealmIntro';
import GameShell from '../components/layout/GameShell';
import QuestionCard from '../components/questions/QuestionCard';
import MiniGameRouter from '../components/minigames/MiniGameRouter';
import BossFight from '../components/bossfight/BossFight';
import RealmComplete from '../components/layout/RealmComplete';
import FinishedScreen from '../components/layout/FinishedScreen';

export default function GamePage() {
  const phase = useGameStore((s) => s.phase);

  switch (phase) {
    case 'realm-intro':
      return <RealmIntro />;
    case 'playing':
      return (
        <GameShell>
          <QuestionCard />
        </GameShell>
      );
    case 'mini-game':
      return <MiniGameRouter />;
    case 'boss-fight':
      return <BossFight />;
    case 'realm-complete':
      return <RealmComplete />;
    case 'finished':
      return <FinishedScreen />;
    default:
      return null;
  }
}
