import css from "./CatalogItem.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useEffect, useState } from "react";
import ModalVans from "../ModalVans/ModalVans";

const MAX_LENGTH = 68;

const truncateDescription = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const addDoubleZero = (text) => {
  const result = text.toFixed() + ".00";
  return result;
};

const CatalogItem = ({ campervan, onFavoriteToggle }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  } = campervan;

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(_id));
  }, [_id]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((id) => id !== _id);
    } else {
      updatedFavorites = [...storedFavorites, _id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);

    if (onFavoriteToggle) {
      onFavoriteToggle();
    }
  };

  const handleShowMore = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <div className={css.card}>
        <img className={css.image} src={gallery[0]} alt="Mavericks" />

        <div className={css.content}>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>{name}</h2>

            <div className={css.priceWrapper}>
              <span className={css.price}>${addDoubleZero(price)}</span>
              <button className={css.heardBtn} onClick={toggleFavorite}>
                <svg
                  className={css.favoriteToggleIcon}
                  width="24px"
                  height="24px"
                >
                  <use
                    xlinkHref={`${sprite}#${
                      isFavorite ? "icon-Property-1pressed" : "icon-Vector"
                    }`}
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={css.rating}>
            <svg className={css.ratingIcon} width="16px" height="16px">
              <use xlinkHref={`${sprite}#icon-Rating`} />
            </svg>

            <span className={css.reviews}>
              {rating}
              {` (${reviews.length} Reviews)`}
            </span>

            <svg className={css.locationIcon} width="18px" height="20px">
              <use xlinkHref={`${sprite}#icon-map-pin`} />
            </svg>
            <span className={css.location}>{location}</span>
          </div>

          <p className={css.description}>
            {truncateDescription(description, MAX_LENGTH)}
          </p>

          <div className={css.features}>
            {adults > 0 && (
              <div className={css.feature}>
                <svg width="20px" height="20px">
                  <use xlinkHref={`${sprite}#icon-Users`} />
                </svg>
                <span>{adults} adults</span>
              </div>
            )}

            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-Step`} />
              </svg>
              {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
            </div>

            <div className={css.feature}>
              <svg width="20px" height="20px">
                <use xlinkHref={`${sprite}#gaz`} />
              </svg>
              {engine.charAt(0).toUpperCase() + engine.slice(1)}
            </div>

            {details.kitchen > 0 && (
              <div className={css.feature}>
                <svg className={css.featureIcon} width="20px" height="20px">
                  <use xlinkHref={`${sprite}#kitchen`} />
                </svg>
                <span>Kitchen</span>
              </div>
            )}

            {details.beds > 0 && (
              <div className={css.feature}>
                <svg className={css.featureIcon} width="20px" height="20px">
                  <use xlinkHref={`${sprite}#bed`} />
                </svg>
                <span>{details.beds} beds</span>
              </div>
            )}

            {details.airConditioner > 0 && (
              <div className={css.feature}>
                <svg width="20px" height="20px">
                  <use xlinkHref={`${sprite}#icon-Vertical-container`} />
                </svg>
                <span> AC</span>
              </div>
            )}
          </div>
          <div>
            <button className={css.button} onClick={handleShowMore}>
              Show more
            </button>

            <ModalVans
              isOpen={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
              campervan={campervan}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
