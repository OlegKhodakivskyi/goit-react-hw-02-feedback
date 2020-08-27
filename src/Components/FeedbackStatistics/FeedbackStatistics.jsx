import React from "react";

const FeedbackStatistics = ({
  good,
  bad,
  neutral,
  total,
  percent,
  NotificationMessage,
}) => {
  return (
    <>
      <div>
        <p>Statistics</p>
        {total === 0 ? (
          NotificationMessage
        ) : (
          <ul>
            <li name={good}> Good:{good}</li>
            <li name={neutral}> Neutral: {neutral} </li>
            <li name={bad}> Bad: {bad} </li>
            <li> Total:{total} </li>
            <li>
              {" "}
              Positive feedback: {isNaN(percent) ? 0 : Math.round(percent)}%
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default FeedbackStatistics;
