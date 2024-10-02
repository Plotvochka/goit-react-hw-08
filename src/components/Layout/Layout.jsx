import AppBar from "../AppBar/AppBar";
import css from "../Layout/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <AppBar />
        {children}
      </div>
    </div>
  );
}
