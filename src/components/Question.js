import Options from "./Options";
import { useQuiz } from "../QuizContext";

function Question() {
  const { questions, questionIndex } = useQuiz();
  return (
    <div>
      <h4>{questions[questionIndex].question}</h4>
      <Options></Options>
    </div>
  );
}

export default Question;
