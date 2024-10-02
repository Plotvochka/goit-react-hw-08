import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../../ContactForm/ContactForm";
import ContactList from "../../ContactList/ContactList";
import SearchBox from "../../SearchBox/SearchBox";
import { fetchContacts } from "../../../redux/contacts/operations";
import { selectContacts } from "../../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(contacts);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? <ContactList /> : <p>Your phone book is empty</p>}
    </div>
  );
}
