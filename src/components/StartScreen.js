import { useQuiz } from "../QuizContext";

function StartScreen() {
  const { questions, startQuiz } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to the React quiz</h2>
      <h3>{questions.length} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startQuiz}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
