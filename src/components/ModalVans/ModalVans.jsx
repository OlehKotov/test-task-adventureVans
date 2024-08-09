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

  return (
    <Modal
      onRequestClose={onClose}
      closeTimeoutMS={300}
      isOpen={isOpen}
      overlayClassName={css.modalOverlay}
      className={css.modal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.modalContainer}>
        <div className={css.headerContainer}>
          <h1 className={css.title}>{name}</h1>
          <button className={css.closeBtn} onClick={() => onClose()}>
            <svg className={css.closeIcon} width="32px" height="32px">
              <use xlinkHref={`${sprite}#close`} />
            </svg>
          </button>
        </div>

        <div className={css.rating}>
          <svg className={css.ratingIcon} width="16px" height="16px">
            <use xlinkHref={`${sprite}#icon-Rating`} />
          </svg>

          <span className={css.reviews}>{rating}{` (${reviewCount} Reviews)`}</span>

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
      </div>
    </Modal>
  );
};

export default ModalVans;
