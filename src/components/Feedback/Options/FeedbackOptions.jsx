import { Buttons } from './FeedbackOptions.styled';

export default function FeedbackOptions({
  incrementGood,
  incrementNeutral,
  incrementBad,
}) {
  return (
    <div>
      <Buttons onClick={incrementGood}>Good</Buttons>
      <Buttons onClick={incrementNeutral}>Neutral</Buttons>
      <Buttons onClick={incrementBad}>Bad</Buttons>
    </div>
  );
}
