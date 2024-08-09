import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import campersReducer from './campersSlice'; 

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});
export default store;



