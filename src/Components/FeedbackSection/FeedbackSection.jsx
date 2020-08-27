import React from "react";

const FeedbackSection = ({ changeValue }) => {
  return (
    <>
      <div>
        <h2> "Please, leave a feedback" </h2>
        <button type="button" name="good" onClick={changeValue}>
          Good
        </button>
        <button type="button" name="neutral" onClick={changeValue}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={changeValue}>
          Bad
        </button>
      </div>
    </>
  );
};

export default FeedbackSection;
