import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  testimonials: [
    {
      id: 1,
      quote:
        "Arpan is an exceptional developer. He delivered our project on time with clean code and great attention to detail. Highly recommended!",
      name: "Rohan Verma",
      title: "CEO, TechNova",
      avatar: "/testimonials/rohan.jpg",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Great communication throughout and the final product exceeded what we asked for. Would work together again.",
      name: "Priya Nair",
      title: "Product Lead, Fintrace",
      avatar: "/testimonials/priya.jpg",
      rating: 5,
    },
  ],
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: INITAL_STATE,
  reducers: {
    update: () => {},
  },
});

export const { update } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
