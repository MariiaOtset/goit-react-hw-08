// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchContacts } from "../src/redux/contacts/operations";
// import { useEffect, lazy } from "react";
// import { refreshUser } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import Layout from "./components/Layout/Layout";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
// import ToastNotification from "./components/ToastNotification/ToastNotification";
// import Loading from "./components/Loading/Loading";
// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </>
  );
}

export default App;
