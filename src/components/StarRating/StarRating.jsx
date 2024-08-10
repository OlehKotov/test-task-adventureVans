import css from "./StarRating.module.css";
import sprite from "../../assets/icons/sprite.svg";

const StarRating = ({ rating }) => {
  const maxRating = 5;

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starClass = index < rating ? `#icon-Rating` : `#icon-star`;

    return (
      <span key={index}>
        <svg width="16px" height="16px">
          <use xlinkHref={`${sprite}${starClass}`} />
        </svg>
      </span>
    );
  });
  return <div>{stars}</div>;
};

export default StarRating;
