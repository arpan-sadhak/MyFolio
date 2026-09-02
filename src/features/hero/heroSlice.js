import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "Arpan Sadhak",
  greeting: "Hello, I'm",
  firstName: "Arpan",
  lastName: "Sadhak",
  role: "Full Stack Developer",
  tagline:
    "I build beautiful, functional and user-centered digital experiences.",
  yearsLabel: "3+",
  yearsSub: "Years of Learning",
  availability: "Available for work",
  signature :"Arpan Sadhak",
  avatar: {
    avatar: "",
    avatarPositionX: 50,
    avatarPositionY: 50,
    avatarScale: 1,
  },
  resumeUrl: "/",
  
};

export const heroSlice = createSlice({
  name: "hero",
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

export const { update } = heroSlice.actions;

export default heroSlice.reducer;
