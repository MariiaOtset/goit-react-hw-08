import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

const PhoneBookPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPageWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {isLoading && !error ? <Loader /> : <ContactList />}
    </div>
  );
};
export default PhoneBookPage;
