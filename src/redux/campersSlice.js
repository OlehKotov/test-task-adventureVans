import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';

 
const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    data: [],
    loading: false, 
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});


export default campersSlice.reducer;
