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
      <div className="question-box" onClick={handleCardClick}></div>
      {questionOverlay && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-navbar">
              <h3 className="popup__title">
                {category.name} for {question.value}
              </h3>
              <img
                className="popup__black-cross"
                src={blackCross}
                alt="Black cross"
                onClick={handlePopupClose}
              />
            </div>
            <div className="popup-question-area">
              <div className="popup-question">
                <h3>{question.question}</h3>
              </div>
              <div className="popup-answer">
                <h3>
                  {answerVisibility[question.question] && question.answer}
                </h3>
              </div>
            </div>
            <div className="popup-team-scores">
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
