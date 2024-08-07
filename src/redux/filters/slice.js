import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: {
      AC: false,
      Automatic: false,
      Kitchen: false,
      TV: false,
      ShowerWC: false,
    },
    type: '',
  },
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: (state) => {
      return {
        location: '',
        equipment: {
          AC: false,
          Automatic: false,
          Kitchen: false,
          TV: false,
          ShowerWC: false,
        },
        type: '',
      };
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;