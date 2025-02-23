import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};
const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filters.name = action.payload;
    },
  },
});
export const changeFilter = slice.reducer;
export const { filterContacts } = slice.actions;
