import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filters/slice';

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(setFilters(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="location">Location</label>
        <input id="location" placeholder='Kyiv, Ukraine' {...register('location')} />
      </div>

      <div>
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <label>
          <input type="checkbox" {...register('equipment.AC')} />
          AC
        </label>
        <label>
          <input type="checkbox" {...register('equipment.Automatic')} />
          Automatic
        </label>
        <label>
          <input type="checkbox" {...register('equipment.Kitchen')} />
          Kitchen
        </label>
        <label>
          <input type="checkbox" {...register('equipment.TV')} />
          TV
        </label>
        <label>
          <input type="checkbox" {...register('equipment.ShowerWC')} />
          Shower/WC
        </label>
      </div>

      <div>
        <p>Vehicle type</p>
        <label>
          <input type="radio" value="Van" {...register('type')} />
          Van
        </label>
        <label>
          <input type="radio" value="FullyIntegrated" {...register('type')} />
          Fully Integrated
        </label>
        <label>
          <input type="radio" value="Alcove" {...register('type')} />
          Alcove
        </label>
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;