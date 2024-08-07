import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.homeWrapper}>

      <Logo />
      <h1 className={css.welcomeText}>Welcome to our campervan rental website, where your unforgettable travels begin!</h1>
      <Button>Welcome</Button>
    
    </div>
    
  )
}

export default Home