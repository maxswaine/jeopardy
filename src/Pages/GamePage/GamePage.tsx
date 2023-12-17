import { useState } from "react";
import Divs from "../../components/Divs/Divs";
import { Category, Question, Team } from "../../types/types";
import "./GamePage.scss";
import Points from "../../components/Points/Points";

type GamePageProps = {
  categories: Category[];
  teams: Team[];
};

const GamePage = ({ categories, teams }: GamePageProps) => {
  if (!teams || !Array.isArray(teams) || teams.length === 0) {
    return <div>No teams available</div>;
  }

  const [teamScores, setTeamScores] = useState<Team[]>(teams);

  const handleScoreChange = (teamIndex: number, value: number) => {
    const updatedScores = [...teamScores];
    updatedScores[teamIndex].score += value;
    setTeamScores(updatedScores);
  };

  return (
    <div className="game-container">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <h2 className="title">{category.name}</h2>
          {category.questions.map(
            (question: Question, questionIndex: number) => (
              <Divs
                key={questionIndex}
                question={question}
                category={category}
                teamScores={teamScores}
                onScoreChange={handleScoreChange}
              />
            )
          )}
        </div>
      ))}
      <div className="teams-score-display">
        {teams.map((team, index) => (
          <div key={index}>
            <h2>
              {team.name} Score: {team.score}
            </h2>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default GamePage;
