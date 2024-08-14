import { useForm } from "react-hook-form";
import sprite from "../../assets/icons/sprite.svg";
import css from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { location, equipment, type, transmission } = data;
    dispatch(changeFilter({ filterType: "location", value: location }));
    dispatch(changeFilter({ filterType: "type", value: type }));
    Object.keys(equipment).forEach((key) => {
      dispatch(changeFilter({ filterType: key, value: equipment[key] }));
    });
    dispatch(changeFilter({ filterType: "transmission", value: transmission }));
  };

  return (
    <section className={css.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.location}>
          <label htmlFor="location" className={css.locationText}>
            Location
          </label>

          <div className={css.inputWrapper}>
            <input
              className={css.locationInput}
              id="location"
              placeholder="Kyiv, Ukraine"
              {...register("location")}
            />
            <svg className={css.locationIcon} width="18px" height="20px">
              <use xlinkHref={`${sprite}#icon-map-pin`} />
            </svg>
          </div>
        </div>

        <div>
          <p className={css.filterText}>Filters</p>
          <p className={css.filterHeader}>Vehicle equipment</p>
          <div className={css.filterLine}></div>

          <div className={css.checkboxContainer}>
            <label className={css.checkboxLabel}>
              <input
                type="checkbox"
                {...register("equipment.airConditioner")}
                className={css.checkboxInput}
              />
              <div className={css.checkboxContent}>
                <svg className={css.checkboxIcon} width="32px" height="32px">
                  <use xlinkHref={`${sprite}#icon-Vertical-container`} />
                </svg>
                <div className={css.checkboxText}>AC</div>
              </div>
            </label>

            <label className={css.checkboxLabel}>
              <input
                type="checkbox"
                value="automatic"
                {...register("transmission")}
                className={css.checkboxInput}
              />
              <div className={css.checkboxContent}>
                <svg className={css.checkboxIcon} width="32px" height="32px">
                  <use xlinkHref={`${sprite}#icon-Step`} />
                </svg>
                <div className={css.checkboxText}>Automatic</div>
              </div>
            </label>

            <label className={css.checkboxLabel}>
              <input
                type="checkbox"
                {...register("equipment.kitchen")}
                className={css.checkboxInput}
              />
              <div className={css.checkboxContent}>
                <svg className={css.checkboxIcon} width="32px" height="32px">
                  <use xlinkHref={`${sprite}#icon-Kitchen`} />
                </svg>
                <div className={css.checkboxText}>Kitchen</div>
              </div>
            </label>

            <label className={css.checkboxLabel}>
              <input
                type="checkbox"
                {...register("equipment.TV")}
                className={css.checkboxInput}
              />
              <div className={css.checkboxContent}>
                <svg className={css.checkboxIcon} width="32px" height="32px">
                  <use xlinkHref={`${sprite}#icon-TV`} />
                </svg>
                <div className={css.checkboxText}>TV</div>
              </div>
            </label>

            <label className={css.checkboxLabel}>
              <input
                type="checkbox"
                {...register("equipment.shower")}
                className={css.checkboxInput}
              />
              <div className={css.checkboxContent}>
                <svg className={css.checkboxIcon} width="32px" height="32px">
                  <use xlinkHref={`${sprite}#icon-Shower`} />
                </svg>
                <div className={css.checkboxText}>Shower/WC</div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <p className={css.filterHeader}>Vehicle type</p>
          <div className={css.filterLine}></div>

          <div className={css.radioContainer}>
            <label className={css.radioLabel}>
              <input
                type="radio"
                value="panelTruck"
                {...register("type")}
                className={css.radioInput}
              />
              <div className={css.radioContent}>
                <svg className={css.radioIcon} width="40px" height="28px">
                  <use xlinkHref={`${sprite}#icon-Button-2`} />
                </svg>
                <div className={css.radioText}>Van</div>
              </div>
            </label>

            <label className={css.radioLabel}>
              <input
                type="radio"
                value="fullyIntegrated"
                {...register("type")}
                className={css.radioInput}
              />
              <div className={css.radioContent}>
                <svg className={css.radioIcon} width="40px" height="28px">
                  <use xlinkHref={`${sprite}#icon-Button-3`} />
                </svg>
                <div className={css.radioText}>Fully Integrated</div>
              </div>
            </label>

            <label className={css.radioLabel}>
              <input
                type="radio"
                value="alcove"
                {...register("type")}
                className={css.radioInput}
              />
              <div className={css.radioContent}>
                <svg className={css.radioIcon} width="40px" height="28px">
                  <use xlinkHref={`${sprite}#icon-Button-4`} />
                </svg>
                <div className={css.radioText}>Alcove</div>
              </div>
            </label>
          </div>
        </div>

        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
