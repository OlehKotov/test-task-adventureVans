import css from "./Reviews.module.css";
import sprite from "../../assets/icons/sprite.svg";
import BookingForm from "../BookingForm/BookingForm";
import StarRating from "../StarRating/StarRating";

const Reviews = ({ campervan }) => {
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

  const maxRating = 5;

  return (
    <div className={css.container}>
      <div className={css.reviewsContainer}>
        {reviews.map(({ id, reviewer_name, reviewer_rating, comment }) => (
          <div key={id} className={css.reviewItem}>
            <div className={css.reviews}>
              <div className={css.avatar}>
                {reviewer_name.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className={css.reviewName}>{reviewer_name}</h2>
                <StarRating rating={reviewer_rating} />
              </div>
            </div>

            <p className={css.reviewComment}>{comment}</p>
          </div>
        ))}
      </div>

      <BookingForm />
    </div>
  );
};

export default Reviews;
