

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  location: "",
  equipment: {
    airConditioner: false,
    kitchen: false,
    TV: false,
    shower: false,
  },
  type: "",
  transmission: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      const { filterType, value } = action.payload;

      if (filterType === "location") {
        state.location = value;
      } else if (filterType === "type") {
        state.type = value;
      } else if (filterType === "transmission") {
        state.transmission = value;
      } else if (state.equipment.hasOwnProperty(filterType)) {
        state.equipment[filterType] = value;
      }
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;




