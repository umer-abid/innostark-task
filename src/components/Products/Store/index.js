// @import Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// @dummy data
import { products } from "../../../Data";

export const getProducts = createAsyncThunk(
  "/products/getProducts",
  async (params, { dispatch, getState }) => {
    dispatch(loadingStatus(true));
    dispatch(allProducts(products));
    dispatch(loadingStatus(false));
  }
);
export const addProducts = createAsyncThunk(
  "/products/addProducts",
  async (newProd, { dispatch, getState }) => {
    dispatch(loadingStatus(true));
    let allProd = getState().products.products;
    let id = Math.floor(Math.random() * 100);
    let data = { id: id, ...newProd };
    let updateProduct = [data, ...allProd];
    dispatch(allProducts(updateProduct));
    dispatch(loadingStatus(false));
  }
);
export const updateProducts = createAsyncThunk(
  "/products/updateProducts",
  async (updatedProd, { dispatch, getState }) => {
    dispatch(loadingStatus(true));
    let allProd = getState().products.products;
    const updatedItems = allProd.map(el =>
      el.id === updatedProd.id ? updatedProd : el
    );
    dispatch(allProducts(updatedItems));
    dispatch(loadingStatus(false));
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    loadingStatus: false,
    products: []
  },
  reducers: {
    allProducts: (state, action) => {
      state.products = action.payload;
    },
    loadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    }
  }
});

export const { loadingStatus, allProducts } = productsSlice.actions;

export default productsSlice.reducer;
