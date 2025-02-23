import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, option) {
      state.items = state.items.filter((item) => item.id !== option.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
