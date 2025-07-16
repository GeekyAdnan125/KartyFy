import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalQuantities: 0,
  totalprice: 0,
};
const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const itemIdx = state.products.find((item) => item.id == newItem.id);
      if (itemIdx) {
        itemIdx.quantity++;
        itemIdx.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.imageurl,
        });
      }
      state.totalprice += newItem.price;
      state.totalQuantities++;
    },
    removeFromCart(state, action) {
      const del_id = action.payload;
      const findItem = state.products.find((item) => item.id == del_id);
      if (findItem) {
        state.totalprice -= findItem.totalPrice;
        state.totalQuantities -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== del_id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id == id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalprice += findItem.price;
        state.totalQuantities++;
        state.totalprice += findItem.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id == id);
      if (findItem.quantity > 1) {
        if (findItem) {
          findItem.quantity--;
          findItem.totalprice -= findItem.price;
          state.totalQuantities--;
          state.totalprice -= findItem.price;
        }
      }
    },
  },
});

export const {
  setProducts,
  addTocart,
  increaseQuantity,
  removeFromCart,
  decreaseQuantity,
} = cardSlice.actions;
export default cardSlice.reducer;
