import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { useId } from "react";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required!"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Invalid phone number! Enter the number in the format 000-00-00"
    )
    .required("Phone number is required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        ...values,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameField}>Name</label>
          <Field className={css.input} name="name" id={nameField} />
          <ErrorMessage name="name" />
          <label htmlFor={numberField}>Number</label>
          <Field className={css.input} name="number" id={numberField} />
          <ErrorMessage name="number" component="span" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
