import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedback}>
      <ul className={css.feedbackList}>
        {Object.keys(feedback).map((feedbackType) => {
          return (
            <li key={feedbackType}>
              {feedbackType}:<span>{feedback[feedbackType]}</span>
            </li>
          );
        })}
        <li>
          Total: <span>{totalFeedback}</span>
        </li>
        <li>
          Positive: <span>{positiveFeedback}</span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
