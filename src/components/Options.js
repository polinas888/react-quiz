import { useQuiz } from "../QuizContext";

function Options() {
  const {
    chooseAnswer,
    nextQuestion,
    finishQuiz,
    answerId,
    questionIndex,
    questions,
  } = useQuiz();
  return (
    <div className="options">
      {questions[questionIndex].options.map((option, index) => (
        <button
          onClick={() => chooseAnswer(index)}
          className={`btn btn-option ${
            answerId && answerId - 1 === index ? "answer" : ""
          }  ${
            answerId && index === questions[questionIndex].correctOption
              ? "correct"
              : ""
          } ${
            answerId && index !== questions[questionIndex].correctOption
              ? "wrong"
              : ""
          }`}
          key={option}
          disabled={answerId}
        >
          {option}
        </button>
      ))}
      {questionIndex !== questions.length - 1 && answerId !== null && (
        <button className="btn btn-ui" onClick={nextQuestion}>
          Next
        </button>
      )}
      {questionIndex === questions.length - 1 && (
        <button className="btn btn-ui" onClick={finishQuiz}>
          Finish
        </button>
      )}
    </div>
  );
}

export default Options;
