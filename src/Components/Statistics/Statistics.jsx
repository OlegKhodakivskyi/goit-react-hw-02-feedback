import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackSection from "../FeedbackSection/FeedbackSection";
import FeedbackStatistics from "../FeedbackStatistics/FeedbackStatistics";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = (e) => {
    // console.log(e);
    const name = e.target.name;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, number) => {
      acc = acc + number;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );
    const NotificationMessage = "No feedback given";

    return (
      <>
        <FeedbackSection changeValue={this.changeValue} />
        <FeedbackStatistics
          good={good}
          bad={bad}
          neutral={neutral}
          percent={percent}
          total={total}
          NotificationMessage={NotificationMessage}
        />
      </>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.number,
  changeValue: PropTypes.func,
};
