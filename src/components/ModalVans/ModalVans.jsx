import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import css from "./ModalVans.module.css";
import sprite from "../../assets/icons/sprite.svg";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const addDoubleZero = (text) => {
  const result = text.toFixed() + ".00";
  return result;
};

const ModalVans = ({ isOpen, onClose, campervan }) => {
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(css.bodyLock);
    } else {
      document.body.classList.remove(css.bodyLock);
    }
    return () => {
      document.body.classList.remove(css.bodyLock);
    };
  }, [isOpen]);

  const handleClose = () => {
    setActiveTab("");
    onClose();
  };

  if (!campervan) return null;

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

  const renderContent = () => {
    if (activeTab === "features") {
      return <Features campervan={campervan} />;
    } else if (activeTab === "reviews") {
      return <Reviews campervan={campervan} />;
    }
  };

  return (
    <Modal
      onRequestClose={handleClose}
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

          <span className={css.reviews}>
            {rating}
            {` (${reviews.length} Reviews)`}
          </span>

          <svg className={css.locationIcon} width="18px" height="20px">
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <span className={css.location}>{location}</span>
        </div>
        <div className={css.price}>€{addDoubleZero(price)}</div>

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

        <div className={css.tabs}>
          <button
            className={`${css.tabLink} ${
              activeTab === "features" ? css.active : ""
            }`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`${css.tabLink} ${
              activeTab === "reviews" ? css.active : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className={css.line} />
        <div className={css.tabContent}>{renderContent()}</div>
      </div>
    </Modal>
  );
};

export default ModalVans;
