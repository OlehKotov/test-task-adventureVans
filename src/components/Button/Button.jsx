import { NavLink } from "react-router-dom";
import css from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <NavLink to="/catalog" className={css.button}>
      {children}
    </NavLink>
  );
};

export default Button;
