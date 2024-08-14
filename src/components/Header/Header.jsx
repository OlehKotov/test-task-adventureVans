import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header >
      <nav className={css.header}>
        <NavLink to="/" className={css.all}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.all}>
          All campers
        </NavLink>
        <NavLink to="/favorites" className={css.favorites}>
          Favorite campers
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
