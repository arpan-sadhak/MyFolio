import { createSlice } from "@reduxjs/toolkit";
import { fetchAbout } from "../../service/api";
import { extraReducers } from "../../utils/extraReducers";

const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,  
};

export const aboutMeSlice = createSlice({
  name: "about",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
  extraReducers : (builder) => extraReducers(fetchAbout)(builder)
});

export const { setAbout } = aboutMeSlice.actions;

export default aboutMeSlice.reducer;
