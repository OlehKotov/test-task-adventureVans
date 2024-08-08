import css from "./CatalogItem.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useState } from "react";
import ModalVans from "../ModalVans/ModalVans";

const MAX_LENGTH = 68;

const truncateDescription = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const addDoubleZero = (text) => {
  const result = text.toString().slice(0) + ".00";
  return result;
};

const CatalogItem = ({ campervan }) => {
  const [showHeard, setShowHeard] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedCampervan, setSelectedCampervan] = useState(null);

  const {
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

  const toggleHeardPressed = () => {
    setShowHeard(!showHeard);
  };

  const reviewCount = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) /
    reviewCount;

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
              <button className={css.heardBtn} onClick={toggleHeardPressed}>
                <svg
                  className={css.favoriteToggleIcon}
                  width="24px"
                  height="24px"
                >
                  <use
                    xlinkHref={`${sprite}#${
                      showHeard ? "icon-Property-1pressed" : "icon-Vector"
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

            <span className={css.reviews}>{`${averageRating.toFixed(
              1
            )} (${reviewCount} Reviews)`}</span>

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

// {
//   "_id": "1",
//   "name": "Road Bear C 23-25",
//   "price": 10000,
//   "rating": 4.5,
//   "location": "Ukraine, Kyiv",
//   "adults": 3,
//   "children": 2,
//   "engine": "petrol",
//   "transmission": "automatic",
//   "form": "alcove",
//   "length": "7.3m",
//   "width": "2.65m",
//   "height": "3.65m",
//   "tank": "208l",
//   "consumption": "30l/100km",
//   "description": "Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace.",
//   "details": {
//     "airConditioner": 1,
//     "bathroom": 1,
//     "kitchen": 1,
//     "beds": 3,
//     "TV": 1,
//     "CD": 1,
//     "radio": 1,
//     "shower": 1,
//     "toilet": 1,
//     "freezer": 1,
//     "hob": 3,
//     "microwave": 1,
//     "gas": "35kg",
//     "water": "151l"
//   },
//   "gallery": [
//     "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//     "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//     "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//   ],
//   "reviews": [
//     {
//       "reviewer_name": "Alice",
//       "reviewer_rating": 5,
//       "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//     },
//     {
//       "reviewer_name": "Bob",
//       "reviewer_rating": 4,
//       "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//     }
//   ]
// }
