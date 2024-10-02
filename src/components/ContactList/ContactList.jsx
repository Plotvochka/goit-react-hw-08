import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactListItem from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((user) => (
        <li key={user.id} className={css.contact}>
          <ContactListItem user={user} />
        </li>
      ))}
    </ul>
  );
}
