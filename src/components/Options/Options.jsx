import css from './Options.module.css';

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
      reset
    </button>
  );
};

const Options = ({ updateFeedback, resetFeedback, marks, totalMarks }) => {
  return (
    <ul className={css.list}>
      {marks.map((label, idx) => (
        <li className={css.item} key={idx + label}>
          <OptionBtn updateFeedback={updateFeedback} label={label} />
        </li>
      ))}
      {totalMarks > 0 && (
        <li>
          <ResetBtn resetFeedback={resetFeedback} />
        </li>
      )}
    </ul>
  );
};

export default Options;
