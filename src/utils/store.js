import userReducer from "./features/users";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer:{
    user: userReducer
  }
})

