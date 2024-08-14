import SearchForm from "../../components/SearchForm/SearchForm";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import css from "./Favorites.module.css";
import Header from "../../components/Header/Header";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const Favorites = () => {
  return (
    <div>
      <DocumentTitle>AdventureVans - Favorite campers</DocumentTitle>
      <Header />
      <main className={css.catalog}>
        <SearchForm />
        <FavoriteList />
      </main>
    </div>
  );
};

export default Favorites;
