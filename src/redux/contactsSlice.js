import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },

    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },

    fetchingInProgress(state) {
      state.isLoading = true;
    },

    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;
