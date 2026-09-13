import { createSlice } from "@reduxjs/toolkit";
import { fetchData, updateData } from "../../service/api";
import { extraReducers } from "../../utils/extraReducers";

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
  loaded : false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    extraReducers(fetchData)(builder);
    extraReducers(updateData)(builder);
  },
});

// export const { } = aboutMeSlice.actions;

export default dataSlice.reducer;