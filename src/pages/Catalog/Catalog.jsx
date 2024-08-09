import SearchForm from "../../components/SearchForm/SearchForm";
import CatalogList from "../../components/CatalogList/CatalogList";
import css from "./Catalog.module.css";
import Header from "../../components/Header/Header";

const Catalog = () => {
  return (
    <div>
      <Header />
      <div className={css.catalog}>
        <SearchForm />
        <CatalogList />
      </div>
    </div>
  );
};

export default Catalog;
