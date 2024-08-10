import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <a
        className={css.logo}
        href="http://localhost:5173/"
      >
        AdventureVans
      </a>
    </div>
  );
};

export default Logo;
