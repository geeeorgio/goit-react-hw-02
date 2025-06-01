import css from './Feedback.module.css';

const FeedBackRes = ({ label, value }) => {
  return (
    <li className={css.item}>
      <span>{label}:</span>
      <span>{value}</span>
    </li>
  );
};

const Feedback = ({ results }) => {
  return (
    <ul className={css.list}>
      {results.map(([label, value]) => (
        <FeedBackRes key={label + value} label={label} value={value} />
      ))}
    </ul>
  );
};

export default Feedback;
