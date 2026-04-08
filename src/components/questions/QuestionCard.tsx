import { useState, useEffect, useCallback } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { useSound } from '../../hooks/useSound';
import MultipleChoice from './MultipleChoice';
import TrueFalse from './TrueFalse';
import OrderingQuestion from './OrderingQuestion';
import MatchingQuestion from './MatchingQuestion';
import PointsAnimation from '../shared/PointsAnimation';


export default function QuestionCard() {
  const getCurrentQuestion = useGameStore((s) => s.getCurrentQuestion);
  const getRealmQuestions = useGameStore((s) => s.getRealmQuestions);
  const currentQuestionIndex = useGameStore((s) => s.currentQuestionIndex);
  const answerQuestion = useGameStore((s) => s.answerQuestion);
  const lastAnswerCorrect = useGameStore((s) => s.lastAnswerCorrect);
  const streak = useGameStore((s) => s.streak);
  const startMiniGame = useGameStore((s) => s.startMiniGame);
  const nextQuestion = useGameStore((s) => s.nextQuestion);

  const [answered, setAnswered] = useState(false);
  const [showPoints, setShowPoints] = useState(false);
  const [pointsValue, setPointsValue] = useState(0);
  const { play } = useSound();

  const question = getCurrentQuestion();
  const totalQuestions = getRealmQuestions().length;

  // Reset state when question changes
  useEffect(() => {
    setAnswered(false);
    setShowPoints(false);
    setPointsValue(0);
  }, [currentQuestionIndex]);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (!question || answered) return;
      setAnswered(true);

      const prevStreak = streak;
      answerQuestion(question.id, correct);

      if (correct) {
        const newStreak = prevStreak + 1;
        if (newStreak === 3 || newStreak === 5) {
          play('streak');
        } else {
          play('correct');
        }
        const pts = prevStreak >= 3 ? 150 : 100;
        setPointsValue(pts);
        setShowPoints(true);
        setTimeout(() => setShowPoints(false), 1500);
      } else {
        play('wrong');
        // Wrong answer: auto-advance to mini-game after 2 seconds
        setTimeout(() => {
          startMiniGame(question);
        }, 2000);
      }
    },
    [question, answered, answerQuestion, streak, startMiniGame, play],
  );

  if (!question) return null;

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple-choice':
        return <MultipleChoice key={question.id} question={question} onAnswer={handleAnswer} disabled={answered} />;
      case 'true-false':
        return <TrueFalse key={question.id} question={question} onAnswer={handleAnswer} disabled={answered} />;
      case 'ordering':
        return <OrderingQuestion key={question.id} question={question} onAnswer={handleAnswer} disabled={answered} />;
      case 'matching':
        return <MatchingQuestion key={question.id} question={question} onAnswer={handleAnswer} disabled={answered} />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in-up relative mx-auto w-full max-w-2xl">
      <p className="mb-6 text-center text-sm text-forge-muted">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>

      <h2 className="mb-3 text-center font-serif text-2xl font-bold text-forge-parchment">
        {question.question}
      </h2>

      {question.flavorText && (
        <p className="mb-8 text-center font-serif italic text-forge-muted">
          {question.flavorText}
        </p>
      )}

      {!question.flavorText && <div className="mb-8" />}

      {renderQuestion()}

      {/* Feedback */}
      {answered && lastAnswerCorrect !== null && (
        <div className="mt-6 text-center">
          <p
            className={`mb-2 font-serif text-lg font-semibold ${
              lastAnswerCorrect ? 'text-forge-teal' : 'text-forge-crimson'
            }`}
          >
            {lastAnswerCorrect ? 'Correct!' : 'Not quite...'}
          </p>
          <p className="text-sm text-forge-muted">{question.explanation}</p>
          {lastAnswerCorrect && (
            <button
              onClick={() => nextQuestion()}
              className="mt-4 rounded border border-forge-gold bg-forge-gold/10 px-6 py-2 font-sans text-forge-gold transition-all hover:bg-forge-gold/20"
            >
              Next question →
            </button>
          )}
        </div>
      )}

      {/* Points animation */}
      <PointsAnimation points={pointsValue} show={showPoints} />
    </div>
  );
}
