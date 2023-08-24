function Options({
  question,
  quizDispatch,
  answerId,
  questionIndex,
  numQuestions,
}) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => quizDispatch({ type: "chooseAnswer", payload: index })}
          className={`btn btn-option ${
            answerId && answerId - 1 === index ? "answer" : ""
          }  ${answerId && index === question.correctOption ? "correct" : ""} ${
            answerId && index !== question.correctOption ? "wrong" : ""
          }`}
          key={option}
          disabled={answerId}
        >
          {option}
        </button>
      ))}
      {questionIndex !== numQuestions - 1 && answerId !== null && (
        <button
          className="btn btn-ui"
          onClick={() => quizDispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
      {questionIndex === numQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => quizDispatch({ type: "finishQuiz" })}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default Options;
