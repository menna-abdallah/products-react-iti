import { configureStore } from "@reduxjs/toolkit";
import fromSlice from "./slices/formSlice";
import productsReducer from './slices/productsSlice';


export default configureStore({
  reducer: {
    formReducer: fromSlice,
    products: productsReducer,
  },
});

