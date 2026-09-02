import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contact: {
    heading: "Let's build something amazing together!",
    email: "hello@example.com",
    location: "Kolkata, India",
    social: [
      { platform: "github", url: "https://github.com/arpan-sadhak" },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/arpan-sadhak-63bb54308",
      },
    ],
  },
};

const contactSlice = createSlice({
  name: "contact",
  initialState: INITIAL_STATE,
  reducers: {
    update: () => {},
  },
});

export const { update } = contactSlice.actions;
export default contactSlice.reducer;
