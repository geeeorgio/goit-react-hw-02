import css from './Options.module.css';

const Notification = ({ message }) => {
  return <li className={css.notification}>{message}</li>;
};

const OptionBtn = ({ updateFeedback, label }) => {
  return (
    <button
      className={css.optionBtn}
      onClick={() => updateFeedback(label)}
      type="button"
    >
      {label}
    </button>
  );
};

const ResetBtn = ({ resetFeedback }) => {
  return (
    <button className={css.resetBtn} onClick={resetFeedback} type="reset">
      Reset
    </button>
  );
};

const Options = ({ updateFeedback, resetFeedback, points, totalMarks }) => {
  return (
    <ul className={css.list}>
      {points.map((label, idx) => (
        <li className={css.item} key={idx + label}>
          <OptionBtn updateFeedback={updateFeedback} label={label} />
        </li>
      ))}
      {totalMarks > 0 ? (
        <li>
          <ResetBtn resetFeedback={resetFeedback} />
        </li>
      ) : (
        <Notification message="No feedback yet" />
      )}
    </ul>
  );
};

export default Options;
