import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  project: [
    {
      id: "eduportal",
      title: "EduPortal",
      description:
        "A complete school management system with role-based access, attendance, and analytics.",
      tags: ["MERN Stack", "Tailwind CSS"],
      image: "/projects/eduportal.jpg",
      link: "#",
    },
    {
      id: "devconnect",
      title: "DevConnect",
      description:
        "A developer networking platform to connect, collaborate and grow together.",
      tags: ["Next.js", "MongoDB"],
      image: "/projects/devconnect.jpg",
      link: "#",
    },
    {
      id: "taskflow",
      title: "TaskFlow",
      description:
        "A smart task management app to boost productivity and team collaboration.",
      tags: ["React", "Node.js"],
      image: "/projects/taskflow.jpg",
      link: "#",
    },
  ],
};

export const projectCardSlice = createSlice({
  name: "projects",
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

export const { update } = projectCardSlice.actions;

export default projectCardSlice.reducer;
