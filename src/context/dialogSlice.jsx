import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState: {
    isOpen: false,
    title: null,
    content: null,
    data: null,
    cart: {
      isOpen: false,
      listItem: [],
    },
  },
  reducers: {
    openWithContentFull: (state, action) => {
      state.isOpen = true;
      state.content = action.payload.content;
      state.title = action.payload.title;
      state.data = action.payload.data;
    },
    closeClear: (state) => {
      state.isOpen = false;
      state.content = null;
      state.data = null;
      state.title = null;
    },
    openCart: (state) => {
      state.cart.isOpen = true;
    },
    closeCart: (state) => {
      state.cart.isOpen = false;
    },
    addCartItem: (state, action) => {
      const copyListItem = [...state.cart.listItem];
      const item = copyListItem.find(({ id }) => id == action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        copyListItem.push(action.payload);
      }
      state.cart.listItem = copyListItem;
    },
    removeCartItem: (state, action) => {
      const copyListItem = [...state.cart.listItem];
      const item = copyListItem.find(({ id }) => id == action.payload.id);
      if (item) {
        const listFilterItem = copyListItem.filter(
          ({ id }) => id != action.payload.id
        );
        if (copyListItem.length == 1) {
          state.cart.isOpen = false;
        }
        state.cart.listItem = listFilterItem;
      }
    },
    inCrementCartItem: (state, action) => {
      const copyListItem = [...state.cart.listItem];
      const item = copyListItem.find(({ id }) => id == action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      state.cart.listItem = copyListItem;
    },
    deCrementCartItem: (state, action) => {
      const copyListItem = [...state.cart.listItem];
      const item = copyListItem.find(({ id }) => id == action.payload.id);
      if (item) {
        if (!item.quantity == 0) {
          item.quantity -= 1;
          state.cart.listItem = copyListItem;
        }
        if (copyListItem.length == 1 && item.quantity == 0) {
          const listFilterItem = copyListItem.filter(
            ({ id }) => id != action.payload.id
          );
          state.cart.listItem = listFilterItem;
          state.cart.isOpen = false;
        }
      }
    },
  },
});

export default dialogSlice.reducer;
export const {
  openWithContentFull,
  closeClear,
  openCart,
  closeCart,
  addCartItem,
  removeCartItem,
  inCrementCartItem,
  deCrementCartItem,
} = dialogSlice.actions;
