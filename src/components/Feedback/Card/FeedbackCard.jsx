import React, { Component } from 'react';
import {
  FeedbackTitleH1,
  FeedbackTitleH2,
  Statistics,
  FeedbackOptions,
  Notification,
} from '../index';
import { CardStyle } from './FeedbackCard.styled';

class FeedbackCard extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    visible: false,
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  incrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    this.show();
  };
  incrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
    this.show();
  };
  incrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    this.show();
  };

  show = () => {
    this.visible = true;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    const positive = Math.round((good / total) * 100);

    return (
      <CardStyle>
        <FeedbackTitleH1 title="Please leave feedback" />
        <FeedbackOptions
          incrementGood={this.incrementGood}
          incrementNeutral={this.incrementNeutral}
          incrementBad={this.incrementBad}
        />
        <FeedbackTitleH2 title="Statistics" />
        {this.visible ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification messege={'There is no feedback'} />
        )}
      </CardStyle>
    );
  }
}

export default FeedbackCard;
