import SearchForm from "../../components/SearchForm/SearchForm";
import CatalogList from "../../components/CatalogList/CatalogList";
import css from "./Catalog.module.css";
import Header from "../../components/Header/Header";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const Catalog = () => {
  return (
    <div>
      <DocumentTitle>AdventureVans - All campers</DocumentTitle>
      <Header />
      <main className={css.catalog}>
        <SearchForm />
        <CatalogList />
      </main>
    </div>
  );
};

export default Catalog;
