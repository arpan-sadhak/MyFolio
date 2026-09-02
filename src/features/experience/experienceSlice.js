import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    experience: [
    {
      id: 1,
      role: 'B.Tech, Computer Science Engineering',
      org: 'Swami Vivekananda University',
      period: '2023 — Present',
      description:
        'Coursework and independent projects in full-stack development, data structures, and systems design.',
    },
    {
      id: 2,
      role: 'Full Stack & Desktop App Projects',
      org: 'Independent / Open Source',
      period: '2024 — Present',
      description:
        'Built production-grade full-stack platforms and offline desktop applications end to end.',
    },
  ]
}

const experienceSlice = createSlice({
    name : "experience",
    initialState : INITIAL_STATE,
    reducers : {
        update : () => {}
    }
})

export const {update} = experienceSlice.actions;
export default experienceSlice.reducer