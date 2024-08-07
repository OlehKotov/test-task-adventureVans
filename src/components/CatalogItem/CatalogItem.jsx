
import css from "./CatalogItem.module.css";
import sprite from "../../assets/icons/sprite.svg";

const CatalogItem = ({ campervan }) => {
  if (!campervan) {
    return <p>No campervan data available.</p>;
  }

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

  return (
    <div className="catalog-item">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Location: {location}</p>
      <p>Adults: {adults}</p>
      <p>Children: {children}</p>
      <p>Engine: {engine}</p>
      <p>Transmission: {transmission}</p>
      <p>Form: {form}</p>
      <p>Length: {length}</p>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <p>Tank: {tank}</p>
      <p>Consumption: {consumption}</p>
      <p>Description: {description}</p>
      <div className="details">
        <h3>Details:</h3>
        {details && Object.entries(details).map(([key, value]) => (
          <p key={key}>{`${key}: ${value}`}</p>
        ))}
      </div>
      <div className="gallery">
        <h3>Gallery:</h3>
        {gallery && gallery.map((url, index) => (
          <img key={index} src={url} alt={`${name} image ${index + 1}`} />
        ))}
      </div>
      <div className="reviews">
        <h3>Reviews:</h3>
        {reviews && reviews.map((review, index) => (
          <div key={index} className="review">
            <p>Reviewer: {review.reviewer_name}</p>
            <p>Rating: {review.reviewer_rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
    // <div>
    //   <div className={css.card}>
    //     <img
    //       className={css.image}
    //       src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
    //       alt="Mavericks"
    //     />
    //     <div className={css.content}>


    //       <div className={css.titleWrapper}>
    //         <h2 className={css.title}>{name}</h2>

    //         <div className={css.priceWrapper}>
    //           <span className={css.price}>${price}</span>
    //           <span>
    //             <svg
    //               className={css.favoriteToggleIcon}
    //               width="25px"
    //               height="22px"
    //             >
    //               <use xlinkHref={`${sprite}#icon-Vector`} />
    //             </svg>
    //           </span>
    //         </div>
    //       </div>

    //       <div className={css.rating}>
    //         <span><svg
    //               className={css.favoriteToggleIcon}
    //               width="16px"
    //               height="16px"
    //             >
    //               <use xlinkHref={`${sprite}#icon-Rating`} />
    //             </svg> 4.4 (2 Reviews)</span>
    //         <span className={css.location}>{location}</span>
    //       </div>

    //       <p className={css.description}>
    //       {description}
    //       </p>
    //       <div className={css.features}>
    //         <div className={css.feature}>{adults}</div>
    //         <div className={css.feature}>{transmission}</div>
    //         <div className={css.feature}>{engine}</div>
    //         <div className={css.feature}>{kitchen}</div>
    //         <div className={css.feature}>{beds}</div>
    //         <div className={css.feature}>{airConditioner}</div>
    //       </div>
    //       <div>
    //         <button className={css.showMoreButton}>Show more</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  // );
// };

export default CatalogItem;
