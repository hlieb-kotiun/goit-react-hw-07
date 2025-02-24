import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../components/SearchBox/contactsSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
