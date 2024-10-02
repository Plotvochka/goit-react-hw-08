import { useDispatch } from "react-redux";
import { useId } from "react";
import { Form, Field, Formik } from "formik";
import css from "../LoginForm/LoginForm.module.css";
import { signIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const labelID = useId();
  const handleSubmitForm = (values, actions) => {
    dispatch(signIn({ email: values.email, password: values.password }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmitForm}
    >
      <Form autocomlete="off" className={css.loginForm}>
        <h1 className={css.titleForm}>Login Form</h1>
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
          Log in
        </button>
      </Form>
    </Formik>
  );
}
