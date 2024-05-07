import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "collectionSlice",
  initialState: {
    isEat: true,
  },
  reducers: {
    changeCollection: (state) => {
      state.isEat = !state.isEat;
    },
  },
});

export default collectionSlice.reducer;
export const { changeCollection } = collectionSlice.actions;
