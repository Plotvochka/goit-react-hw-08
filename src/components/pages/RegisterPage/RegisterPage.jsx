import RegistrationForm from "../../RegistrationForm/RegistrationForm";
import style from "../RegisterPage/RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={style.register}>
      <title>Register Form</title>
      <RegistrationForm />
    </div>
  );
}
