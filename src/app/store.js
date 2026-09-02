import { configureStore } from "@reduxjs/toolkit";
import  aboutMeReducer from "../features/aboutMe/aboutMeSlice";
import heroReducer from "../features/hero/heroSlice"
import projectReducer from "../features/featuredProjects/featuredProjectsSlice"
import experienceReducer from "../features/experience/experienceSlice"
import blogReducer from "../features/blog/blogSlice"
import testimonialsReducer from "../features/testimonials/testimonialsSlice"
import skillsReducer from "../features/skills/skillsSlice"
import techStackReducer from "../features/techStack/techStackSlice"
import contactReducer from "../features/contact/contactSlice"
import footerReducer from "../features/footer/footerSlice"

export const store = configureStore({
    reducer: {
        about : aboutMeReducer,
        hero : heroReducer,
        projects : projectReducer,
        experience : experienceReducer,
        blog : blogReducer,
        testimonial : testimonialsReducer,
        skills : skillsReducer,
        techStack : techStackReducer,
        contact : contactReducer,
        footer :footerReducer,

    },
})