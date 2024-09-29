import { NavLink } from "react-router-dom";
import css from "../AutNav/AutNav.module.css";

export const AutNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log in
      </NavLink>
    </div>
  );
};
