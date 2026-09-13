import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchData = createAsyncThunk(
  "fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/api/portfolio/get/data`);      
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
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
    }
  }
);

export const updateData = createAsyncThunk(
  "updateData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${apiUrl}/api/portfolio/patch`, data);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);



