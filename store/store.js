import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modalSlice";
import viewJobSlice from "../features/viewJobSlice";


export default configureStore({
  reducer: {
    modal: modalSlice,
    viewJob: viewJobSlice,
  },
});