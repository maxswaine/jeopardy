import { MouseEvent, useState } from "react";
import Divs from "../../Components/Divs/Divs";
import { Category } from "../../Types/types";
import "./GamePage.scss";

type GamePageProps = {
  categories: Category[];
};

const GamePage = ({ categories }: GamePageProps) => {
  const [questionOverlay, setQuestionOverlay] = useState<boolean>(false);

  const handleClick = () => {
    setQuestionOverlay(!questionOverlay);
  };

  return (
    <div className="game-container">
      {categories.map((category, index) => {
        return (
          <div className="category" key={index}>
            <h2 className="title">{category.name}</h2>
            {category.questions.map((question, questionIndex) => {
              return (
                <Divs
                  key={questionIndex}
                  value={question.value}
                  handleClick={handleClick}
                ></Divs>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GamePage;
