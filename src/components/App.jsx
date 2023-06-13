import { useState } from 'react';

import Statistics from './feedback/Statistics';
import Notification from './feedback/Notification';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './feedback/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const feedbackOptionsValue = [good, neutral, bad];

  const onButtonClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
    }
  };

  function countTotalFeedback() {
    return feedbackOptionsValue.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good * 100) / countTotalFeedback());
  }

  const total = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
