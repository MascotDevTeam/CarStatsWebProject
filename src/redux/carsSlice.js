import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//configure firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyB0tST6FM9lpZt70IMJXDVgmyeDx7qmmYA",
  authDomain: "carstats-5c8a0.firebaseapp.com",
  projectId: "carstats-5c8a0",
  storageBucket: "carstats-5c8a0.appspot.com",
  messagingSenderId: "34177133556",
  appId: "1:34177133556:web:c9037dce58379745a0a7a1",
  measurementId: "G-W0QHGETXB3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//functions for retrieving data
export const getAllCars = createAsyncThunk("cars/getAllCars", async () => {
  const querySnapshot = await getDocs(collection(db, "Cars"));
  let cars = [];
  querySnapshot.forEach((doc) => {
    cars.push(doc.data());
  });
  return cars;
});

export const getAllBrands = createAsyncThunk("cars/getAllBrands", async () => {
  const querySnapshot = await getDocs(collection(db, "Brands"));
  let brands = [];
  querySnapshot.forEach((doc) => {
    brands.push(doc.data());
  });
  return brands;
});

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
  extraReducers: (builder) => {
    builder.addCase(getAllCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = action.payload;
      state.error = "";
    });
    builder.addCase(getAllCars.rejected, (state, action) => {
      state.loading = false;
      state.cars = [];
      state.error = "Something went wrong";
    });
    builder.addCase(getAllBrands.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
      state.error = "";
    });
    builder.addCase(getAllBrands.rejected, (state, action) => {
      state.loading = false;
      state.brands = [];
      state.error = "Something went wrong";
    });
  },
});

export default carsSlice.reducer;
