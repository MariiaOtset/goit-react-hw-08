// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchContacts } from "../src/redux/contacts/operations";
import { useEffect, lazy } from "react";
import { refreshUser } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import ToastNotification from "./components/ToastNotification/ToastNotification";
import Loading from "./components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Fetching user...</p>
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

// function App() {
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchContacts());
//   // }, [dispatch]);

//   return (
//     <>
//       <Routes>
//
//       </Routes>
//       {/* <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList /> */}
//     </>
//   );
// }

export default App;
