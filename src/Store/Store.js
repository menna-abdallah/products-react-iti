import { configureStore } from "@reduxjs/toolkit";
import fromSlice from "./slices/formSlice";

export default configureStore({
  reducer: {
    formReducer: fromSlice,
  },
});
