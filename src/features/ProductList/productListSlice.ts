import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { getAllProducts, getProductsByDealersId } from "./api";
import { productAdapter } from "./utils/adapters"

export type ProductType = {
  name: string;
  price: number;
  image: string;
  id: string
};

type InitialStateType = {
  dealers: string[],
  products: ProductType[];
  isLoading: boolean;
  error: null | string;
};

const initialState: InitialStateType = {
  dealers: [],
  products: [],
  isLoading: true,
  error: null,
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setErrorStarus(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    setLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    setDealers(state, action: PayloadAction<string[]>) {
      state.dealers = action.payload;
    },

    changeProductsList(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
  },
});

export const {
  changeProductsList,
  setErrorStarus,
  setLoadingStatus,
  setDealers,
} = productListSlice.actions;

export const productsListReducer = productListSlice.reducer;

export const selectProductsList = (state: RootState) => state.productsList.products;
export const selectDealers = (state: RootState) => state.productsList.dealers;
export const selectLoadingStatus = (state: RootState) => state.productsList.error;
export const selectError = (state: RootState) => state.productsList.error;

export const productInit = (): AppThunk => async (dispatch, getState) => {
  const { productsList } =  getState();
  
  if(productsList.dealers.length > 0) {
    dispatch(receiveProductsByDealersId(productsList.dealers));
  } else {
    dispatch(receiveAllProducts());
  }
}

export const receiveAllProducts = (): AppThunk => async (dispatch) => {
  try {
    setLoadingStatus(true)
    const rawProducts = await getAllProducts();
    const adaptedProducts = productAdapter(rawProducts);
  
    dispatch(changeProductsList(adaptedProducts));
    dispatch(setErrorStarus(null))
  } catch (err) {
    setErrorStarus(err.toString())
  } finally {
    setLoadingStatus(false)
  }
};

export const receiveProductsByDealersId = (dealers: string[]): AppThunk => async (dispatch) => {
  try {
    setLoadingStatus(true)
    const rawProducts = await getProductsByDealersId(dealers);
    const adaptedProducts = productAdapter(rawProducts);
  
    dispatch(changeProductsList(adaptedProducts));
    dispatch(setErrorStarus(null))
  } catch (err) {
    setErrorStarus(err.toString())
  } finally {
    setLoadingStatus(false)
  }
};