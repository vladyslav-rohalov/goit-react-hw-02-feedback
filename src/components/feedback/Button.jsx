import React, { Component } from 'react';
import FeedbackTitleH2 from './TitleH2';
import FeedbackStats from './Stats';

class Counter extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positive: this.props.positive,
  };

  incrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  incrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  incrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positive: Math.round(
          (prevState.good /
            (prevState.good + prevState.neutral + prevState.bad)) *
            100
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementGood}>Good</button>
        <button onClick={this.incrementNeutral}>Neutral</button>
        <button onClick={this.incrementBad}>Bad</button>

        <FeedbackTitleH2 title="Statistics" />
        <FeedbackStats
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positive={this.state.positive}
        />
      </div>
    );
  }
}

export default Counter;
