import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartReducer } from "features/Cart/cartSlice"
import { productsListReducer } from "features/ProductList/productListSlice"
import debounce from "lodash.debounce";

const localState = JSON.parse(window.localStorage.getItem("localState") ?? "null");

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsList: productsListReducer
  },
  preloadedState : localState ?? undefined
});

store.subscribe(debounce(() => {
  const serializedStore = JSON.stringify(store.getState());
  window.localStorage.setItem("localState", serializedStore);
}, 250))

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
