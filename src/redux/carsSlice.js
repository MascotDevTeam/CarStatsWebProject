import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cars: [],
  brands: [],
  error: "",
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default carsSlice.reducer;
