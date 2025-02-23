import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// "https://67bb0887fbe0387ca138dbd9.mockapi.io/contacts"

axios.defaults.baseURL = "https://67bb0887fbe0387ca138dbd9.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (arg, thunkAPI) => {
    try {
      const add = await axios.post("/contacts", arg);
      return add.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const remove = await axios.delete(`/contacts/${id}`);
      console.log(remove.data);

      return remove.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
