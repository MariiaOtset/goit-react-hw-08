import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ children }) => {
  return <p className={css.message}>{children}</p>;
};
export default ErrorMessage;
