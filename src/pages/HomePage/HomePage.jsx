import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css["home-container"]}>
      <header className={css["home-header"]}>
        <h1>Contact book</h1>
        <p>Manage your contacts easily and efficiently</p>
      </header>
      <section className={css.features}>
        <div className={css.feature}>
          <i className="fas fa-user-plus"></i>
          <div className={css.info}>
            <h2>Add contacts</h2>
            <p>Easily add new contacts to your book</p>
          </div>
        </div>
        <div className={css.feature}>
          <i className="fas fa-search"></i>
          <div className={css.info}>
            <h2>Quick search</h2>
            <p>Find the contacts you need in seconds</p>
          </div>
        </div>
        <div className={css.feature}>
          <i className="fas fa-sync-alt"></i>
          <div className={css.info}>
            <h2>Synchronization</h2>
            <p>Your contacts are always with you on all devices</p>
          </div>
        </div>
      </section>
      <section className={css.cta}>
        <h2>Start using it right now!</h2>
        <NavLink to="/contacts" className={css["cta-button"]}>
          Go to contacts
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;
