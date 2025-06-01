import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import './App.css';

const initial = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [ranks, setRanks] = useState(
    JSON.parse(localStorage.getItem('marks')) ?? initial
  );

  const updateFeedback = feedbackType => {
    setRanks(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setRanks(() => initial);
  };

  const total = ranks.good + ranks.bad + ranks.neutral;
  const positivePercent = Math.round((ranks.good / total) * 100) + '%';

  useEffect(
    () => localStorage.setItem('marks', JSON.stringify(ranks)),
    [ranks]
  );

  return (
    <>
      <Description />
      <Options
        resetFeedback={resetFeedback}
        updateFeedback={updateFeedback}
        points={Object.keys(ranks)}
        totalMarks={total}
      />
      {total > 0 && (
        <Feedback
          results={[
            ...Object.entries(ranks),
            ['total', total],
            ['positive', positivePercent],
          ]}
        />
      )}
    </>
  );
}

export default App;
