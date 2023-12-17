import { useState } from "react";
import "./Points.scss";

type PointsProps = {
  initialScore: number;
  questionValue: number;
  onScoreChange: (teamIndex: number, value: number) => void;
  teamIndex: number;
};

const Points = ({
  initialScore,
  questionValue,
  onScoreChange,
  teamIndex,
}: PointsProps) => {
  const [score, setScore] = useState<number>(initialScore);

  const handleIncrement = () => {
    setScore(score + questionValue);
    onScoreChange(teamIndex, questionValue);
  };

  const handleDecrement = () => {
    setScore(score - questionValue);
    onScoreChange(teamIndex, -questionValue);
  };

  return (
    <div className="points">
      <button
        className="points__button points__button--decrement"
        onClick={handleDecrement}
        onKeyDown={(event) => {
          if (event.key === " ") event.preventDefault();
        }}
      >
        -
      </button>
      <div className="points__score">{score}</div>
      <button
        className="points__button points__button--increment"
        onClick={handleIncrement}
        onKeyDown={(event) => {
          if (event.key === " ") event.preventDefault();
        }}
      >
        +
      </button>
    </div>
  );
};

export default Points;
