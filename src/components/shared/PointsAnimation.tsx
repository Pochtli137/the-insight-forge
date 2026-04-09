interface PointsAnimationProps {
  points: number;
  show: boolean;
}

export default function PointsAnimation({ points, show }: PointsAnimationProps) {
  if (!show) return null;

  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
      <span className="animate-float-up inline-block font-serif text-3xl font-bold text-forge-gold">
        +{points}
      </span>
    </div>
  );
}
