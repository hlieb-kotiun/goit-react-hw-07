import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.wrapper}>
        <span className={s.span}>
          <FaUser />
          {name}
        </span>
        <span className={s.span}>
          <FaPhone />
          {number}
        </span>
      </div>
      <button
        className=""
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
