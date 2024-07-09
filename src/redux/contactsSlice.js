import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

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
    builder.addCase(fetchContacts.pending, setPending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, setRejected);

    builder.addCase(addContact.pending, setPending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, setRejected);

    builder.addCase(deleteContact.pending, setPending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    });
    builder.addCase(deleteContact.rejected, setRejected);
  },
});

export default contactsSlice.reducer;
