import { Controller, useForm } from "react-hook-form";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import sprite from "../../assets/icons/sprite.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 30 characters"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.date()
    .transform((value, originalValue) =>
      originalValue ? new Date(originalValue) : null
    )
    .nullable()
    .required("Date is required")
    .typeError("Invalid date format"),
  comment: Yup.string(),
});

const BookingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      date: null,
      comment: "",
    },
  });

  const onSubmit = () => {
    window.location.reload();
  };

  return (
    <div className={css.bookingContainer}>
      <h2 className={css.bookingHeader}>Book your campervan now</h2>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.bookingForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapperFirst}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                className={css.bookingInput}
                type="text"
                placeholder="Name"
                {...field}
              />
            )}
          />
          {errors.name && (
            <div className={css.error}>{errors.name.message}</div>
          )}
        </div>

        <div className={css.inputWrapper}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                className={css.bookingInput}
                type="text"
                placeholder="Email"
                {...field}
              />
            )}
          />
          {errors.email && (
            <div className={css.error}>{errors.email.message}</div>
          )}
        </div>

        <div
          className={css.inputWrapper}
          onClick={() => document.getElementById("date-input").focus()}
        >
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                id="date-input"
                className={css.bookingInput}
                placeholderText="Booking date"
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />
          <svg className={css.bookingIcon} width="20px" height="20px">
            <use xlinkHref={`${sprite}#calendar`} />
          </svg>

          {errors.date && (
            <div className={css.error}>{errors.date.message}</div>
          )}
        </div>
        <div className={css.inputWrapper}>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <textarea
                className={css.bookingTextarea}
                placeholder="Comment"
                {...field}
              />
            )}
          />
          {errors.comment && (
            <div className={css.error}>{errors.comment.message}</div>
          )}
        </div>
        <button type="submit" className={css.button} disabled={isSubmitting}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
