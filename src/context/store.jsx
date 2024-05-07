import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialogSlice";
import collectionSlice from "./collectionSlice";

const store = configureStore({
  reducer: {
    dialog: dialogSlice,
    collection: collectionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
