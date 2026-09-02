import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    skills: [
    { name: 'React', level: 90 },
    { name: 'JavaScript / TypeScript', level: 88 },
    { name: 'Node.js & Express', level: 80 },
    { name: 'MongoDB / SQL', level: 75 },
    { name: 'UI / UX Design', level: 50 },
    { name: 'Tailwind CSS', level: 80 },
  ]

}

const skillsSlice = createSlice({
    name : 'skills',
    initialState : INITIAL_STATE,
    reducers : {
        update : () => {}
    }
})

export const {update} = skillsSlice.actions
export default skillsSlice.reducer