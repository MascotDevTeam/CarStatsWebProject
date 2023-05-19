import { createSlice } from "@reduxjs/toolkit";
//configure firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
