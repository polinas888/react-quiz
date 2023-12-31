function StartScreen({ numberQuestions, startQuiz }) {
  return (
    <div className="start">
      <h2>Welcome to the React quiz</h2>
      <h3>{numberQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startQuiz}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
