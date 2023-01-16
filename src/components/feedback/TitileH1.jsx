import PropTypes from 'prop-types';

export default function FeedbackTitleH1({ title }) {
  return <h1>{title}</h1>;
}

FeedbackTitleH1.propTypes = {
  title: PropTypes.string,
};
