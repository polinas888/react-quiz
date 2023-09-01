import "../index.css";
import { useQuiz } from "../QuizContext";

function Progress() {
  const { questions, questionIndex, points, maxPoints } = useQuiz();
  const progressValue = (questionIndex / questions.length) * questions.length;

  return (
    <div className="progress">
      <progress value={progressValue} max={questions.length} />
      <p>
        <strong>{questionIndex + 1}</strong>/{String(questions.length)}
      </p>
      <p>
        <strong>
          {points}/{maxPoints}
        </strong>
      </p>
    </div>
  );
}

export default Progress;
