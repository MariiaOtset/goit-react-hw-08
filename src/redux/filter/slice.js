import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
          const { name, number } = action.payload;
          state.name = name ?? state.name;
          state.number = number ?? state.number;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;



