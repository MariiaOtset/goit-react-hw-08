import { ErrorMessage, Field } from "formik";
import css from "./FormLabel.module.css";

const FormLabel = ({ title }) => {
  const inputName = title === "username" ? "name" : title;
  const autoComplete = title === "password" ? "current-password" : "on";
  return (
    <label className={css.formLabel}>
      <span className={css.labelTitle}>{title}</span>
      <Field
        autoComplete={autoComplete}
        name={inputName}
        type={title === "password" ? title : "text"}
        className={css.formField}
      />
      <ErrorMessage
        name={inputName}
        component="span"
        className={css.errorMessage}
      />
    </label>
  );
};
export default FormLabel;
