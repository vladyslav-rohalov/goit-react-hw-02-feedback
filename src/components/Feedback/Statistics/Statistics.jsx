import PropTypes from 'prop-types';
import { Highlights } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <p>
        Good: <Highlights>{good}</Highlights>
      </p>
      <p>
        Neutrla: <Highlights>{neutral}</Highlights>
      </p>
      <p>
        Bad: <Highlights>{bad}</Highlights>
      </p>
      <p>
        Total: <Highlights>{total}</Highlights>
      </p>
      <p>
        Positive Feedback: <Highlights>{positive}</Highlights>%
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
