import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);

  const filter = useSelector((state) => state.filter.filters.name);
  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={s.listItem} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
