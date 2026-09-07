import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "../../utils/extraReducers"
import { fetchTechStack } from "../../service/api"

const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,
}

const techStackSlice = createSlice({
    name : 'techStack',
    initialState : INITIAL_STATE,
    reducers : {
      
    },
    extraReducers : (builder) => extraReducers(fetchTechStack)(builder)
    }
)

export const {setTechStack} = techStackSlice.actions
export default techStackSlice.reducer 