function FinishScreen({ points, totalPoints, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  const storedHighScore = localStorage.getItem("highscore");

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎊";
  if (percentage >= 50 && percentage < 80) emoji = "😀";
  if (percentage >= 0 && percentage < 50) emoji = "😊";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> /{" "}
        {totalPoints} ({Math.round(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {storedHighScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
