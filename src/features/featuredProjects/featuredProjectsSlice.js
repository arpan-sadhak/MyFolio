import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "../../utils/extraReducers";
import { fetchProject } from "../../service/api";

const INITIAL_STATE = {
  data : null,
  loading : true,
  error : null,
};

export const projectCardSlice = createSlice({
  name: "projects",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers : (builder)=> extraReducers(fetchProject)(builder)
});

export const { setFeaturedProject } = projectCardSlice.actions;

export default projectCardSlice.reducer;
