import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <a
        className={css.logo}
        // href="https://test-task-adventure-vans.vercel.app"
      >
        AdventureVans
      </a>
    </div>
  );
};

export default Logo;
