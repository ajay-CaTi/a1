import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer,
  },
});

export default appStore;

// Inside store we have one REDUCER that contain multiple reducers

// cart is small reducer
// "reducer" :- is responsible to modify state in "appStore" is combination of diff reducer.
