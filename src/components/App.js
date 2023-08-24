import { useReducer, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialQuizState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  questionIndex: 0,
  answerId: null,
  points: 0,
};

function quizReducer(state, action) {
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

function App() {
  const [{ questions, status, questionIndex, answerId, points }, quizDispatch] =
    useReducer(quizReducer, initialQuizState);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((response) => response.json())
      .then((data) =>
        quizDispatch({ type: "questionsReceived", payload: data })
      )
      .catch((e) => quizDispatch({ type: "questionsFetchFailed" }));
  }, []);

  const maxPoints = questions.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.points;
  }, 0);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numberQuestions={questions.length}
            startQuiz={() => quizDispatch({ type: "startQuiz" })}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              questions={questions}
              questionIndex={questionIndex}
              points={points}
              maxPoints={maxPoints}
            />
            <Question
              question={questions[questionIndex]}
              quizDispatch={quizDispatch}
              answerId={answerId}
              questionIndex={questionIndex}
              numQuestions={questions.length}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={maxPoints}
            quizDispatch={quizDispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
