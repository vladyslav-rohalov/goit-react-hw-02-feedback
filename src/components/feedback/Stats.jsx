import PropTypes from 'prop-types';

export default function FeedbackStats({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutrla: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positive}%</p>
    </div>
  );
}

FeedbackStats.proptTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
