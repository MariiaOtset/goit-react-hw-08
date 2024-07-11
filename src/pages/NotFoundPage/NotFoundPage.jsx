import css from "../NotFoundPage/NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.text} />
      Page not found! Please return
      <Link to="/" className={css.link}>
        Home Page!
      </Link>
      <h1 />
    </div>
  );
};

export default NotFoundPage;
