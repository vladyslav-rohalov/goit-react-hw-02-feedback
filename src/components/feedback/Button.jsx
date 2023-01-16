import PropTypes from 'prop-types';

export default function FeedbackButton({ good, neutral, bad }) {
  return (
    <div>
      <button>{good}</button>
      <button>{neutral}</button>
      <button>{bad}</button>
    </div>
  );
}

FeedbackButton.proptTypes = {
  Good: PropTypes.string,
  Neutral: PropTypes.string,
  Bad: PropTypes.string,
};
