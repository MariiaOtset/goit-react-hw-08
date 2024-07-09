// import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <ul>
        {loading && !error && <p>Loading...Please wait</p>}
        {error && <p>Ooops, something went wrong! Please try again</p>}
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
