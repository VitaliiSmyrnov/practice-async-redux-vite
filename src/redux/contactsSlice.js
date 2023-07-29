import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = (type) =>
  isAnyOf(...extraActions.map((action) => action[type]));

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(getActions("fulfilled"), (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(getActions("pending"), (state) => {
        state.isLoading = true;
      })
      .addMatcher(getActions("rejected"), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),

  // {
  //   [fetchContacts.pending]: handlePending,
  //   [addContact.pending]: handlePending,
  //   [deleteContact.pending]: handlePending,
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.rejected]: handleRejected,

  //   [fetchContacts.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },

  //   [addContact.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },

  //   [deleteContact.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       (item) => item.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  // },
});
