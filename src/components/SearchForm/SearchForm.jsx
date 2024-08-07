import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filters/slice";
import sprite from "../../assets/icons/sprite.svg";
import css from "./SearchForm.module.css";

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(setFilters(data));
    console.log(data);
  };

  return (
    <div className={css.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("equipment.AC")}
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
                {...register("equipment.Automatic")}
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
                {...register("equipment.Kitchen")}
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
                {...register("equipment.ShowerWC")}
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
                value="Van" {...register("type")}
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
                value="FullyIntegrated" {...register("type")}
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
                value="Alcove" {...register("type")}
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

        <button type="submit" className={css.button}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
