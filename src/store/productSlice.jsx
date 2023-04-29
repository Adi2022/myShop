import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   fetchApiProducts(state,action){
    state.data=action.payload;
    }
  },
});

export const { fetchApiProducts } = productSlice.actions;
export default productSlice.reducer;


export const getApiData=()=>{
  return async function getProductsThunk(dispatch,getState){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch(fetchApiProducts(data))
  }
}