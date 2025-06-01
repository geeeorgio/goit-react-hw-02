import css from './Notofication.module.css';

const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};

export default Notification;
