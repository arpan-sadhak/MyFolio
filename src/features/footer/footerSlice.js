import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {

}

const footerSlice = createSlice({
    name : "footer",
    initialState : INITIAL_STATE,
    reducers : {
        update : () => {}
    }
})

export const {update} = footerSlice.actions
export default footerSlice.reducer