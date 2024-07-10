import { NavLink } from "react-router-dom";
// import css from "./HomePage.module.css";
import "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Книга контактов</h1>
        <p>Управляйте своими контактами легко и эффективно</p>
      </header>
      <main className="home-main">
        <section className="features">
          <div className="feature">
            <i className="fas fa-user-plus"></i>
            <h2>Добавляйте контакты</h2>
            <p>Легко добавляйте новые контакты в вашу книгу</p>
          </div>
          <div className="feature">
            <i className="fas fa-search"></i>
            <h2>Быстрый поиск</h2>
            <p>Находите нужные контакты в считанные секунды</p>
          </div>
          <div className="feature">
            <i className="fas fa-sync-alt"></i>
            <h2>Синхронизация</h2>
            <p>Ваши контакты всегда с вами на всех устройствах</p>
          </div>
        </section>
        <section className="cta">
          <h2>Начните пользоваться прямо сейчас!</h2>
          <NavLink to="/contacts" className="cta-button">
            Перейти к контактам
          </NavLink>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
