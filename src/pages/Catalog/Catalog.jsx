import SearchForm from '../../components/SearchForm/SearchForm'
import CatalogList from '../../components/CatalogList/CatalogList'
import css from './Catalog.module.css'

const Catalog = () => {
  return (
    <div className={css.catalog}>
      <SearchForm/>
      <CatalogList/>
    </div>
  )
}

export default Catalog