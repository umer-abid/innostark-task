// @Import Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAccounts = createAsyncThunk(
  "/products/getProducts",
  async (params, { dispatch, getState }) => {
    dispatch(loadingStatus(true));
    let productsList = getState().products?.products;
    if (productsList.length) {
      dispatch(loadingStatus(true));
      return productsList;
    } else {
      dispatch(loadingStatus(false));
      return [];
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    loadingStatus: false,
    products: []
  },
  reducers: {
    loadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    }
  }
});

export const { loadingStatus } = productsSlice.actions;

export default productsSlice.reducer;
