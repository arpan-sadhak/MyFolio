import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  data : null,
  loading : false,
  error : null,
}

const footerSlice = createSlice({
    name : "footer",
    initialState : INITIAL_STATE,
    reducers : {
    }
})

export const {setFooter} = footerSlice.actions
export default footerSlice.reducer