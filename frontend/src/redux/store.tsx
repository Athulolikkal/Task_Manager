import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./user_slice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export default store;
export type StoreType = typeof store;
