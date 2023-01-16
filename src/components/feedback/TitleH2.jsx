import PropTypes from 'prop-types';

export default function FeedbackTitleH2({ title }) {
  return <h2>{title}</h2>;
}

FeedbackTitleH2.propTypes = {
  title: PropTypes.string,
};
