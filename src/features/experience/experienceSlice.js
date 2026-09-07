import { createSlice } from "@reduxjs/toolkit";
import { fetchExperience } from "../../service/api";
import { extraReducers } from "../../utils/extraReducers";

const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,
}

const experienceSlice = createSlice({
    name : "experience",
    initialState : INITIAL_STATE,
    reducers : {
    },
    extraReducers : (builder) => extraReducers(fetchExperience)(builder)
})

export const {setExperience} = experienceSlice.actions;
export default experienceSlice.reducer