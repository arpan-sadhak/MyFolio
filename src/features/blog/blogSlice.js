import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  blog: [
    {
      id: 1,
      title: "Designing dashboards people actually enjoy using",
      excerpt:
        "Notes on hierarchy, motion and restraint from building admin panels for real users.",
      date: "Coming soon",
    },
    {
      id: 2,
      title: "From prototype to production: shipping a MERN app",
      excerpt: "What breaks between a demo and something real users depend on.",
      date: "Coming soon",
    },
  ],
};

const blogSlice = createSlice({
  name: "blog",
  initialState: INITIAL_STATE,
  reducers: {
    update: () => {},
  },
});

export const { update } = blogSlice.actions;

export default blogSlice.reducer;
