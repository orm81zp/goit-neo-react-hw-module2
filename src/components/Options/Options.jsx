import Button from "../Button/Button";
import css from "./Options.module.css";

const Options = ({
  feedback,
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) => {
  const clickHandler = (mark) => () => {
    updateFeedback(mark);
  };

  return (
    <div className={css.options}>
      {Object.keys(feedback).map((feedbackType) => {
        return (
          <Button key={feedbackType} onClick={clickHandler(feedbackType)}>
            {feedbackType}
          </Button>
        );
      })}
      {totalFeedback > 0 && <Button onClick={resetFeedback}>Reset</Button>}
    </div>
  );
};

export default Options;
