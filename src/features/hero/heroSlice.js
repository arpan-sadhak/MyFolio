import { createSlice } from "@reduxjs/toolkit";
import { fetchHero } from "../../service/api";
import {extraReducers} from "../../utils/extraReducers";

const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,
};

export const heroSlice = createSlice({
  name: "hero",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers : (builder) => extraReducers(fetchHero)(builder)
});

export const { setHero } = heroSlice.actions;

export default heroSlice.reducer;
