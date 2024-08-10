import css from "./Features.module.css";
import sprite from "../../assets/icons/sprite.svg";
import BookingForm from "../BookingForm/BookingForm";

const Features = ({ campervan }) => {
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

  return (
    <div className={css.container}>
      <div className={css.featuresDetails}>
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
            <span className={css.featureIconText}>
              {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
            </span>
          </div>

          <div className={css.feature}>
            <svg width="20px" height="20px">
              <use xlinkHref={`${sprite}#gaz`} />
            </svg>
            <span className={css.featureIconText}>
              {engine.charAt(0).toUpperCase() + engine.slice(1)}
            </span>
          </div>

          {details.kitchen > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#kitchen`} />
              </svg>
              <span className={css.featureIconText}>Kitchen</span>
            </div>
          )}

          {details.beds > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#bed`} />
              </svg>
              <span className={css.featureIconText}>{details.beds} beds</span>
            </div>
          )}

          {details.airConditioner > 0 && (
            <div className={css.feature}>
              <svg width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-Vertical-container`} />
              </svg>
              <span className={css.featureIconText}>
                {details.airConditioner} Air conditioner
              </span>
            </div>
          )}
          {details.CD > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-cd`} />
              </svg>
              <span className={css.featureIconText}>CD</span>
            </div>
          )}
          {details.radio > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-radio`} />
              </svg>
              <span className={css.featureIconText}>Radio</span>
            </div>
          )}
          {details.hob > 0 && (
            <div className={css.feature}>
              <svg width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-plate`} />
              </svg>
              <span className={css.featureIconText}>{details.hob} hob</span>
            </div>
          )}
          {details.toilet > 0 && (
            <div className={css.feature}>
              <svg width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-toilet`} />
              </svg>
              <span className={css.featureIconText}>Toilet</span>
            </div>
          )}
          {details.shower > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-shower`} />
              </svg>
              <span className={css.featureIconText}>Toilet</span>
            </div>
          )}
          {details.freezer > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-freezer`} />
              </svg>
              <span className={css.featureIconText}>Freezer</span>
            </div>
          )}
          {details.gas > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-gas`} />
              </svg>
              <span className={css.featureIconText}>Gas</span>
            </div>
          )}
          {details.water > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-water`} />
              </svg>
              <span className={css.featureIconText}>Water</span>
            </div>
          )}
          {details.microwave > 0 && (
            <div className={css.feature}>
              <svg className={css.featureIcon} width="20px" height="20px">
                <use xlinkHref={`${sprite}#icon-microwave `} />
              </svg>
              <span className={css.featureIconText}>Microwave</span>
            </div>
          )}
        </div>
        <p className={css.filterHeader}>Vehicle equipment</p>
        <div className={css.filterLine}></div>
        <div className={css.featuresListContainer}>
          <ul className={css.featuresList}>
            <li className={css.featuresItem}>
              <span>Form</span>
              <span>{form}</span>
            </li>
            <li className={css.featuresItem}>
              <span>Length</span>
              <span>{length}</span>
            </li>
            <li className={css.featuresItem}>
              <span>Width</span>
              <span>{width}</span>
            </li>
            <li className={css.featuresItem}>
              <span>Height</span>
              <span>{height}</span>
            </li>
            <li className={css.featuresItem}>
              <span>Tank</span>
              <span>{tank}</span>
            </li>
            <li className={css.featuresItem}>
              <span>Consumption</span>
              <span>{consumption}</span>
            </li>
          </ul>
        </div>
      </div>

      <BookingForm />
    </div>
  );
};

export default Features;
