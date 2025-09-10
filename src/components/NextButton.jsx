function NextButton({ dispatch, answer, isLastQuestion }) {
  if (answer === null) return null;

  return (
    <>
      {!isLastQuestion ? (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </>
  );
}

export default NextButton;
