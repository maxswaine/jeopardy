import GamePage from "./Pages/GamePage/GamePage";
import { Question } from "./Types/types";
import "./Styles/main.scss";
import { jeopardyQuestions } from "./Data/Data";

function App() {
  return (
    <>
      <GamePage categories={jeopardyQuestions}></GamePage>
    </>
  );
}

export default App;
