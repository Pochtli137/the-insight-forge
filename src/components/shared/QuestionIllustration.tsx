import { useGameStore } from '../../stores/gameStore';

interface Props {
  realm: number;
  questionIndex: number;
}

export default function QuestionIllustration({ realm, questionIndex }: Props) {
  const getRealmQuestions = useGameStore((s) => s.getRealmQuestions);
  const questions = getRealmQuestions();
  const question = questions[questionIndex];

  if (!question) return null;

  const src = `/illustrations/${question.id}.png`;

  return (
    <div className="relative mx-auto mb-8 w-full max-w-sm overflow-hidden rounded-lg border border-forge-border bg-forge-card">
      <img
        src={src}
        alt=""
        className="h-56 w-full object-contain p-2"
        onError={(e) => {
          // Hide if image doesn't exist
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
}
