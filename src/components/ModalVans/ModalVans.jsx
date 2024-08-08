import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import css from "./ModalVans.module.css";
import sprite from "../../assets/icons/sprite.svg";

const addDoubleZero = (text) => {
  const result = text.toString().slice(0) + ".00";
  return result;
};

const ModalVans = ({ isOpen, onClose, campervan }) => {
  if (!campervan) return null;

  const {
    name,
    description,
    gallery,
    price,
    rating,
    location,
    details,
    reviews,
  } = campervan;

  const reviewCount = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) /
    reviewCount;

  return (
    <Modal
      onRequestClose={() => onClose()}
      closeTimeoutMS={300}
      isOpen={isOpen}
      overlayClassName={"modalOverlay"}
      className={css.modalOverlay}
      ariaHideApp={false}
    >
      <div className={css.modal}>
        <h1 className={css.title}>{name}</h1>
        <button className={css.closeBtn} onClick={() => onClose()}>
          <svg className={css.closeIcon} width="32px" height="32px">
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </button>

        <div className={css.rating}>
          <svg className={css.ratingIcon} width="16px" height="16px">
            <use xlinkHref={`${sprite}#icon-Rating`} />
          </svg>

          <span className={css.reviews}>{`${averageRating.toFixed(
            1
          )} (${reviewCount} Reviews)`}</span>

          <svg className={css.locationIcon} width="18px" height="20px">
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <span className={css.location}>{location}</span>
        </div>
        <div className={css.price}>${addDoubleZero(price)}</div>

        <div className={css.imageGallery}>
          {gallery.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Gallery image ${index + 1}`}
              className={css.galleryImage}
            />
          ))}
        </div>

        <p className={css.description}>{description}</p>

        {/* <div className={css.details}>
          <p>Price: ${price}.00</p>
          <p>
            Rating: {averageRating.toFixed(1)} ({reviews.length} Reviews)
          </p>
          <p>Location: {location}</p>
        </div>
        <div className={css.features}>
          {details.beds > 0 && <p>Beds: {details.beds}</p>}
          {details.kitchen > 0 && <p>Kitchen: Available</p>}
          {details.airConditioner > 0 && <p>Air Conditioner: Available</p>}
          Add more features as needed
        </div> */}
      </div>
    </Modal>
  );
};

export default ModalVans;
