import { createSlice } from "@reduxjs/toolkit"
import { extraReducers } from "../../utils/extraReducers"
import { fetchSkills } from "../../service/api"

const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,
}

const skillsSlice = createSlice({
    name : 'skills',
    initialState : INITIAL_STATE,
    reducers : {
    },
    extraReducers : (builder) => extraReducers(fetchSkills)(builder)
})

export const {setSkills} = skillsSlice.actions
export default skillsSlice.reducer