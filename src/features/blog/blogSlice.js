import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "../../utils/extraReducers";
import { fetchBlog } from "../../service/api";

const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: INITIAL_STATE,
  reducers: {

  },
  extraReducers : (builder) => extraReducers(fetchBlog)(builder),
});

export const { setBlog } = blogSlice.actions;

export default blogSlice.reducer;
