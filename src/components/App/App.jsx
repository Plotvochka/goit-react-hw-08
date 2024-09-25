import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/selectors";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.formWrapper}>
      <div className={css.container}>
        <ContactForm />
        <SearchBox />
        {loading && !error && <b>Loading Contacts Book...</b>}
        <ContactList />
      </div>
    </div>
  );
}

export default App;
