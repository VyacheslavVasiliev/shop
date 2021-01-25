import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { ProductType } from "features/ProductList/productListSlice";
import { numberFix } from "utils/";

export type CartProductType = {
  amount: number;
} & ProductType;

type initialStateType = {
  products: CartProductType[];
};

const initialState: initialStateType = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeProducts(state, action: PayloadAction<CartProductType[]>) {
      state.products = action.payload;
    },

    addProduct(state, action: PayloadAction<ProductType>) {
      const product = state.products.find((product) => {
        return product.id === action.payload.id;
      });

      if (product) {
        product.amount++;
      } else {
        const newProduct = { ...action.payload, amount: 1 };
        state.products.push(newProduct);
      }
    },

    deleteProductById(state, action: PayloadAction<string>) {
      const productIndex = state.products.findIndex((product) => {
        return product.id === action.payload;
      });

      if (productIndex >= 0) {
        state.products.splice(productIndex, 1);
      }
    },

    incrementProductAmountById(state, action: PayloadAction<string>) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.amount++;
      }
    },
    decrementProductAmountById(state, action: PayloadAction<string>) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.amount = Math.max(product.amount - 1, 1);
      }
    },
  },
});

export const {
  incrementProductAmountById,
  decrementProductAmountById,
  addProduct,
  deleteProductById,
  changeProducts,
} = cartSlice.actions;
export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectCartTotalSum = (state: RootState) => {
  const totalSum = state.cart.products.reduce((totalSum, product) => {
    return totalSum + product.price * product.amount;
  }, 0);

  return numberFix(totalSum);
};
export const selectCartTotalAmount = (state: RootState) => {
  const totalAmount = state.cart.products.reduce((totalAmount, product) => {
    return totalAmount + product.amount;
  }, 0);

  return numberFix(totalAmount);
};
export const cartReducer = cartSlice.reducer;
