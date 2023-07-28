import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filteredContact(state, action) {
      state = action.payload;
    },
  },
});

export const { filteredContact } = filterSlice.actions;
