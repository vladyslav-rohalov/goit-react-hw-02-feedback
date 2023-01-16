import FeedbackTitleH1 from 'components/feedback/TitileH1';
import FeedbackButton from 'components/feedback/Button';
import FeedbackTitleH2 from 'components/feedback/TitleH2';
import FeedbackResult from 'components/feedback/Result';

function App() {
  return (
    <div>
      <FeedbackTitleH1 title="Please leave feedback" />
      <FeedbackButton good="Good" neutral="Neutral" bad="Bad" />
      <FeedbackTitleH2 title="Statistics" />
      <FeedbackResult good="Good" neutral="Neutral" bad="Bad" />
    </div>
  );
}

export default App;
