import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  searchText: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;
