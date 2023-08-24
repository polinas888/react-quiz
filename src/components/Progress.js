import "../index.css";

function Progress({ questions, questionIndex, points, maxPoints }) {
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
