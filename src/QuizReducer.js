function QuizReducer(state, action) {
  switch (action.type) {
    case "questionsReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "questionsFetchFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active", questionIndex: 0 };
    case "chooseAnswer":
      const isCorrect =
        action.payload === state.questions[state.questionIndex].correctOption;
      return {
        ...state,
        answerId: action.payload + 1,
        points: isCorrect
          ? state.points + state.questions[state.questionIndex].points
          : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        answerId: null,
      };
    case "finishQuiz":
      return { ...state, status: "finished" };
    case "refreshQuiz":
      return {
        ...state,
        status: "ready",
        questionIndex: 0,
        answerId: null,
        points: 0,
      };
    default:
      throw new Error("Something went wrong with fetching data");
  }
}

export default QuizReducer;
