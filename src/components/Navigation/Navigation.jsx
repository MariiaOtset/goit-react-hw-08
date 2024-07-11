import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <nav>
        <div className={css.navigation}>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
export default Navigation;
