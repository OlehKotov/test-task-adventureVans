import { useCallback, useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./FavoriteList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { MagnifyingGlass } from "react-loader-spinner";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../redux/selectors";

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleFavoriteToggle = useCallback(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const favoriteCampers = campers.filter((camper) =>
    favorites.includes(camper._id)
  );

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return (
      <div className={css.loader}>
        <MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#f7f7f7"
          color="#e44848"
        />
      </div>
    );
  }

  return (
    <section className={css.campervansContainer}>
      <div className="campervanList">
        {favoriteCampers.length > 0 ? (
          favoriteCampers.map((camper) => (
            <CatalogItem
              key={camper._id}
              campervan={camper}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))
        ) : (
          <div className={css.noResults}>No favorite campers found</div>
        )}
      </div>
    </section>
  );
};

export default FavoriteList;
