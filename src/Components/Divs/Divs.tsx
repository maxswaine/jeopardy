import { useEffect, useState } from "react";
import blackCross from "../../assets/images/black-cross.png";
import { Category, Question, Team } from "../../types/types";
import "./Divs.scss";
import Points from "../Points/Points";

type DivProps = {
  category: Category;
  question: Question;
  teamScores: Team[];
  onScoreChange: (teamIndex: number, value: number) => void;
};

const Divs = ({ category, question, teamScores, onScoreChange }: DivProps) => {
  const [questionOverlay, setQuestionOverlay] = useState<boolean>(false);
  const [answerVisibility, setAnswerVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCardClick = () => {
    setQuestionOverlay(true);
  };

  const handlePopupClose = () => {
    setQuestionOverlay(false);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === "Space" && questionOverlay) {
      setAnswerVisibility((prevState) => ({
        ...prevState,
        [question.question]: true,
      }));
    }

    if (event.code === "Escape") {
      handlePopupClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [questionOverlay, question.question]);

  return (
    <div className="jeopardy-question">
      <div className="jeopardy-question__box" onClick={handleCardClick}>
        {question.value}
      </div>
      {questionOverlay && (
        <div className="jeopardy-question__popup-overlay">
          <div className="jeopardy-question__popup">
            <div className="jeopardy-question__popup-navbar">
              <h3 className="jeopardy-question__popup-rules">
                Press ESC to go back
              </h3>
              <h3 className="jeopardy-question__popup-title">
                {category.name.toUpperCase()} FOR {question.value}
              </h3>
              <img
                className="jeopardy-question__popup-black-cross"
                src={blackCross}
                alt="Black cross"
                onClick={handlePopupClose}
              />
            </div>
            <div className="jeopardy-question__popup-question-area">
              <div className="jeopardy-question__popup-question">
                <h3>{question.question.toUpperCase()}</h3>
              </div>
              <h3>
                -----------------------------------------------------------------------------------------------------------------------------------------------------------
              </h3>

              <div className="jeopardy-question__popup-answer">
                <h3>
                  {answerVisibility[question.question] &&
                    question.answer.toUpperCase()}
                </h3>
              </div>
            </div>
            <div className="jeopardy-question__popup-team-scores">
              {teamScores.map((team, index) => {
                return (
                  <Points
                    key={team.name}
                    initialScore={team.score}
                    questionValue={question.value}
                    onScoreChange={onScoreChange}
                    teamIndex={index}
                  ></Points>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Divs;
