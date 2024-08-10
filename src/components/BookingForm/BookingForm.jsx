import { useForm } from "react-hook-form";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    reset();
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
          {errors.name && (
            <span className={css.error}>{errors.name.message}</span>
          )}
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
          {errors.email && (
            <span className={css.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={css.inputWrapper}>
          <input
            {...register("bookingDate", {
              required: "Booking date is required",
            })}
            type="date"
            placeholder="Booking date"
            className={css.bookingDate}
          />
          {errors.bookingDate && (
            <span className={css.error}>{errors.bookingDate.message}</span>
          )}
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
