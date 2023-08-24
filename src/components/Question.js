import Options from "./Options";

function Question({
  question,
  quizDispatch,
  answerId,
  questionIndex,
  numQuestions,
}) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        quizDispatch={quizDispatch}
        answerId={answerId}
        questionIndex={questionIndex}
        numQuestions={numQuestions}
      ></Options>
    </div>
  );
}

export default Question;
