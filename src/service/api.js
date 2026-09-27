

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${apiUrl}/api`,
});


// Automatically attach JWT to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// ===============================
// FETCH PORTFOLIO DATA
// ===============================

export const fetchData = createAsyncThunk(
  "fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/portfolio/get/data");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong",
      );
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();

      if (state.loaded) {
        return false;
      }

      return true;
    },
  },
);

// ===============================
// UPDATE PORTFOLIO DATA
// ===============================

export const updateData = createAsyncThunk(
  "updateData",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data.body);

      const response = await api.patch(
        `/portfolio/patch/${data.id}`,
        data.body,
      );

      return response.data;
    } catch (error) {
      console.log(error.response?.data?.error);

      return rejectWithValue(
        error.response?.data?.message || "Something went wrong",
      );
    }
  },
);

// ===============================
// UPLOAD IMAGE
// ===============================

export const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await api.post("/portfolio/upload-image", formData);

  return response.data.url;
};

// ===============================
// UPLOAD PDF
// ===============================

export const uploadPDF = async (file) => {
  const formData = new FormData();

  formData.append("pdf", file);

  const response = await api.post("/portfolio/upload-pdf", formData);

  return response.data.url;
};

// ===============================
// LOGIN
// ===============================

export const loginAdmin = async ({email, password}) => {
  console.log({email, password});
  
  const response = await api.post("/auth/login", {
    email,
    password,
  });
  
  // Save JWT
  localStorage.setItem("token", response.data.token);

  return response.data;
};

// ===============================
// GET CURRENT ADMIN
// ===============================

export const getCurrentAdmin = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};

// ===============================
// LOGOUT
// ===============================

// export const logoutAdmin = () => {
//   localStorage.removeItem("token");
// };
