import { useEffect, useState } from "react";
import Container from "../Container/Container";
import Decription from "../Decription/Decription";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";

import { FEEDBACK_TYPES, STORAGE_KEY } from "../../const";
import css from "./App.module.css";

const defaultState = {
  [FEEDBACK_TYPES.GOOD]: 0,
  [FEEDBACK_TYPES.NEUTRAL]: 0,
  [FEEDBACK_TYPES.BAD]: 0,
};

const positiveFeedbackType = FEEDBACK_TYPES.GOOD;

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback =
    Math.round((feedback[positiveFeedbackType] / totalFeedback) * 100) + "%";

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(defaultState);
  };

  const renderFeedback = () => {
    return totalFeedback > 0 ? (
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    ) : (
      <Notification>No feedback yet</Notification>
    );
  };

  return (
    <Container>
      <div className={css.appWrapper}>
        <Decription />
        <Options
          feedback={feedback}
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {renderFeedback()}
      </div>
    </Container>
  );
};

export default App;
