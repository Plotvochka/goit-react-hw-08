import css from "../RegistrationForm/RegistrationForm.module.css";

import { useDispatch } from "react-redux";
import { useId } from "react";
import { Form, Field, Formik } from "formik";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const labelID = useId();
  const handleSubmitForm = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmitForm}
    >
      <Form autocomlete="off" className={css.registerForm}>
        <h1 className={css.titleForm}>Register Form</h1>
        <div className={css.group}>
          <Field
            className={css.fieldForm}
            type="text"
            name="name"
            id={`${labelID}-name`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-name`} className={css.labelForm}>
            User Name
          </label>
        </div>
        <div className={css.group}>
          <Field
            className={css.fieldForm}
            type="email"
            name="email"
            id={`${labelID}-email`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-email`} className={css.labelForm}>
            Email
          </label>
        </div>
        <div className={css.group}>
          <Field
            className={css.fieldForm}
            type="password"
            name="password"
            id={`${labelID}-password`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-password`} className={css.labelForm}>
            Password
          </label>
        </div>
        <button className={css.buttonForm} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
