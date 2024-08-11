import { Controller, useForm } from "react-hook-form";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import sprite from "../../assets/icons/sprite.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";



const validationSchema = Yup.object({
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
    .nullable(),
}).required();




const BookingForm = () => {
  // const [startDate, setStartDate] = useState(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.bookingContainer}>
      <p className={css.bookingHeader}>Book your campervan now</p>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={css.bookingForm}
        noValidate
      >
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

{/* <div className={css.inputWrapper}>
          <Controller
            name="bookingDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                className={css.dataPicker}
                placeholderText="Booking date"
                dateFormat="dd/MM/yyyy"
              />
              
            )}
          />
          {errors.bookingDate && (
            <span className={css.error}>{errors.bookingDate.message}</span>
          )}
        </div> */}


<div className={css.inputWrapper}>
          <Controller
            name="bookingDate"
            control={control}
            render={({ field }) => (
              <div className={css.dateInputWrapper}>
                <DatePicker
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className={css.bookingInput}
                  placeholderText="Booking date"
                  dateFormat="dd/MM/yyyy"
                />
                <svg className={css.calendarIcon} width="20px" height="20px">
                  <use xlinkHref={`${sprite}#calendar`} />
                </svg>
              </div>
            )}
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


