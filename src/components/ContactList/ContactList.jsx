import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

import ContactListItem from "../Contact/Contact";
import { selectVisibleContact } from "../../redux/auth/selectors";

export default function ContactList() {
  const listContact = useSelector(selectVisibleContact);

  return (
    <ul>
      {listContact.map((user) => (
        <li key={user.id} className={css.contact}>
          <ContactListItem user={user} />
        </li>
      ))}
    </ul>
  );
}
