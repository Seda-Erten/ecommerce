import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (p) => p.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count += action.payload.count;
      } else {
        state.products.push(action.payload);
      }

      writeFromBasketToStorage(state.products);

      state.totalAmount = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    removeFromBasket: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);

      writeFromBasketToStorage(state.products);

      state.totalAmount = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    calculateBasket: (state) => {
      state.totalAmount = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
  },
});

export const { addToBasket, removeFromBasket, calculateBasket, setDrawer } =
  basketSlice.actions;

export default basketSlice.reducer;
