import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.welcomeText}>Welcome, {user.name} 👋</p>
      <button type="button" className={css.button} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};
export default UserMenu;
