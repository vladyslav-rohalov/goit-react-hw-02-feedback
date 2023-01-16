import PropTypes from 'prop-types';

export default function FeedbackResult({ good, neutral, bad }) {
  return (
    <div>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
    </div>
  );
}

FeedbackResult.proptTypes = {
  Good: PropTypes.string,
  Neutral: PropTypes.string,
  Bad: PropTypes.string,
};
