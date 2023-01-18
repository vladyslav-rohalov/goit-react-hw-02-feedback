import PropTypes from 'prop-types';
import { TitleH1 } from './TitleH1.styled';

export default function FeedbackTitleH1({ title }) {
  return <TitleH1>{title}</TitleH1>;
}

FeedbackTitleH1.propTypes = {
  titile: PropTypes.string,
};
