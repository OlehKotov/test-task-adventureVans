import { useForm } from "react-hook-form";
import css from "./BookingForm.module.css";
import sprite from "../../assets/icons/sprite.svg";

const BookingForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={css.bookingContainer}>
      <p className={css.bookingHeader}>Book your campervan now</p>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.bookingForm}>
        <div className={css.inputWrapperFirst}>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            className={css.bookingInput}
          />
        </div>

        <div className={css.inputWrapper}>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            placeholder="Email"
            className={css.bookingInput}
          />
        </div>

        <div className={css.inputWrapper}>
          <input
            type="text"
            value=""
            placeholder="Booking date"
            className={css.bookingDate}
          />
          <svg className={css.bookingIcon} width="20px" height="20px">
            <use xlinkHref={`${sprite}#calendar`} />
          </svg>
        </div>

        <div className={css.inputWrapper}>
          <textarea
            {...register("comment")}
            placeholder="Comment"
            className={css.bookingTextarea}
          />
        </div>

        <button type="submit" className={css.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
