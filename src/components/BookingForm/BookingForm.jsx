import { useForm } from "react-hook-form";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import sprite from "../../assets/icons/sprite.svg";


const validationSchema = Yup
  .object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        "Invalid email format"
      ),
      
      bookingDate: Yup.date()
      .required("Booking date is required")
      .typeError("Booking date is required") 
      .nullable(),
  })
  .required();

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <div className={css.bookingContainer}>
      <p className={css.bookingHeader}>Book your campervan now</p>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.bookingForm} noValidate>
        <div className={css.inputWrapperFirst}>
          <input
            {...register("name")}
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
            {...register("email")}
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
            {...register("bookingDate")}
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




<div class="modal-field-check">
            <input
              type="checkbox"
              class="modal-check visually-hidden"
              name="user-privacy"
              id="user-privacy"
              value="true"
              required
            />
            <label class="check-label" for="user-privacy">
              <span class="check-label-box">
                <svg class="check-label-icon" width="10" height="8">
                  <use href="./images/icons.svg#icon-Vector"></use>
                </svg>
              </span>
            </label>
          </div>