import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  heading: "About Me",
  body: "I'm a passionate developer who loves solving problems and building products that make an impact.",
  stats: [
    { label: "Years of Learning", value: "2+", icon: "clock" },
    { label: "Projects Completed", value: "20+", icon: "layers" },
    { label: "Happy Clients", value: "15+", icon: "briefcase" },
    { label: "Client Satisfaction", value: "100%", icon: "shield" },
  ],
};

export const aboutMeSlice = createSlice({
  name: "about",
  initialState: INITIAL_STATE,
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { update } = aboutMeSlice.actions;

export default aboutMeSlice.reducer;
