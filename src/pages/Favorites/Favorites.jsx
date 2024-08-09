import SearchForm from "../../components/SearchForm/SearchForm";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import css from "./Favorites.module.css";
import Header from "../../components/Header/Header";

const Favorites = () => {
  return (
    <div>
      <Header />
      <div className={css.catalog}>
        <SearchForm />
        <FavoriteList />
      </div>
    </div>
  );
};

export default Favorites;
