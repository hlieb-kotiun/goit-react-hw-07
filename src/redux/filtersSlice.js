import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filter.filters.name;

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
