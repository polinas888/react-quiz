import { useQuiz } from "../QuizContext";

function FinishScreen() {
  const { points, maxPoints, refreshQuiz } = useQuiz();
  return (
    <>
      <p className="result">
        You finished quiz with the score <strong>{points}</strong> from
        {maxPoints} ({Math.ceil((points / maxPoints) * 100)}%)
      </p>
      <button className="btn btn-ui" onClick={refreshQuiz}>
        Play again
      </button>
    </>
  );
}

export default FinishScreen;
