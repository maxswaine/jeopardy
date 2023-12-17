import "./Styles/main.scss";
import { jeopardyQuestions } from "./data/Questions";
import { teams } from "./data/Teams";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <>
      <GamePage categories={jeopardyQuestions} teams={teams}></GamePage>
    </>
  );
}

export default App;
