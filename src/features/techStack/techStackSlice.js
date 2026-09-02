import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    techStack: [
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'node' },
    { name: 'MongoDB', icon: 'leaf' },
    { name: 'Tailwind CSS', icon: 'wind' },
    { name: 'Vite', icon: 'bolt' },
  ],

}

const techStackSlice = createSlice({
    name : 'techStack',
    initialState : INITIAL_STATE,
    reducers : {
        update : () => {}
    }
})

export const {update} = techStackSlice.actions
export default techStackSlice.reducer 