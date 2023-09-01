import { useContext, useReducer } from "react";
import { createContext } from "react";
import QuizReducer from "./QuizReducer";

const QuizContext = createContext();

const initialQuizState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  questionIndex: 0,
  answerId: null,
  points: 0,
};

function QuizContextProvider({ children }) {
  const [{ questions, status, questionIndex, answerId, points }, quizDispatch] =
    useReducer(QuizReducer, initialQuizState);

  async function fetchQuestions() {
    fetch("http://localhost:9000/questions")
      .then((response) => response.json())
      .then((data) =>
        quizDispatch({ type: "questionsReceived", payload: data })
      )
      .catch((e) => quizDispatch({ type: "questionsFetchFailed" }));
  }

  function startQuiz() {
    quizDispatch({ type: "startQuiz" });
  }

  function chooseAnswer(index) {
    quizDispatch({ type: "chooseAnswer", payload: index });
  }

  function nextQuestion() {
    quizDispatch({ type: "nextQuestion" });
  }

  function finishQuiz() {
    quizDispatch({ type: "finishQuiz" });
  }

  function refreshQuiz() {
    quizDispatch({ type: "refreshQuiz" });
  }

  const maxPoints = questions.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.points;
  }, 0);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        questionIndex,
        answerId,
        points,
        maxPoints,
        fetchQuestions,
        chooseAnswer,
        nextQuestion,
        finishQuiz,
        refreshQuiz,
        startQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

export { QuizContextProvider, useQuiz };
