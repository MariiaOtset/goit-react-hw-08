import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.info}>
        <div className={css.wrapper}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.wrapper}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
