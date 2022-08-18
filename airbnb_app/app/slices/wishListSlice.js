import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
const initialState = {
  loading: false,
  wishListData: '',
  error: "",
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    setWishList: (state, action) => {
      state.wishListData=( action.payload);
    },
  },
});
export const { setWishList} = wishListSlice.actions;

export default wishListSlice.reducer;
