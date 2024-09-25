import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66f2b62d71c84d8058766482.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "Contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/Contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/Contacts", newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "Contact/deleteContact",
  async (idContact, thunkAPI) => {
    try {
      const response = await axios.delete(`/Contacts/${idContact}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
