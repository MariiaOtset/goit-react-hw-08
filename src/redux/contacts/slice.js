import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const setPending = (state) => {
  state.loading = true;
  state.error = null;
};

const setRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, setPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, setRejected)

      .addCase(addContact.pending, setPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, setRejected)

      .addCase(deleteContact.pending, setPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, setRejected)

      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        const indexToUpdate = state.items.findIndex(
          ({ id }) => id === payload.id
        );
        state.items[indexToUpdate] = payload;
      });
  },
});

export default contactsSlice.reducer;
