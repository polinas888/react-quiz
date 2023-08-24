function FinishScreen({ points, totalPoints, quizDispatch }) {
  return (
    <>
      <p className="result">
        You finished quiz with the score <strong>{points}</strong> from
        {totalPoints} ({Math.ceil((points / totalPoints) * 100)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => quizDispatch({ type: "refreshQuiz" })}
      >
        Play again
      </button>
    </>
  );
}

export default FinishScreen;
