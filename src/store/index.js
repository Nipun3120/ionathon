import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    dataState: dataSlice.reducer,
  },
});

export default store;
