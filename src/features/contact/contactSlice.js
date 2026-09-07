import { createSlice } from "@reduxjs/toolkit";
import { fetchContact } from "../../service/api";
import { extraReducers } from "../../utils/extraReducers";

const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers : (builder)=> extraReducers(fetchContact)(builder)
});

export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;
