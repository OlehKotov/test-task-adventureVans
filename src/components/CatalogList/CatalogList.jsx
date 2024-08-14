import { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { MagnifyingGlass } from "react-loader-spinner";
import { selectCampers, selectError, selectFilters, selectLoading } from "../../redux/selectors";

const CatalogList = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const filteredCampers = campers.filter((campervan) => {
    const { location, equipment, type, transmission } = filters;
    const {
      location: camperLocation = "",
      details: camperDetails = {},
      form: camperForm = "",
      transmission: camperTransmission = "",
    } = campervan;

    const matchesLocation = location
      ? camperLocation.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchesType = type ? camperForm === type : true;
    const matchesTransmission = transmission
      ? camperTransmission === transmission
      : true;
    const matchesEquipment = Object.keys(equipment).every((key) => {
      return equipment[key] ? camperDetails[key] === 1 : true;
    });
    return (
      matchesLocation && matchesEquipment && matchesType && matchesTransmission
    );
  });

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

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
      <ul className="campervanList">
        {filteredCampers.length > 0 ? (
          filteredCampers
            .slice(0, visibleCount)
            .map((campervan) => (
              <CatalogItem key={campervan._id} campervan={campervan} />
            ))
        ) : (
          <div className={css.noResults}>No campers found</div>
        )}
      </ul>

      {visibleCount < filteredCampers.length && (
        <button onClick={loadMore} className={css.loadMoreButton}>
          Load more
        </button>
      )}
    </section>
  );
};

export default CatalogList;
