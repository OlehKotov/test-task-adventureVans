import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66211e173bf790e070b1e4b9.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "advert/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/advert");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


