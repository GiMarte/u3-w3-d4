import { configureStore } from "@reduxjs/toolkit";
import setDataReducer from "../reducers/setDataReducer";
import setFavoriteReducer from "../reducers/setFavoriteReducer";

const store = configureStore({
  reducer: { favorites: setFavoriteReducer, data: setDataReducer },
});

export default store;
