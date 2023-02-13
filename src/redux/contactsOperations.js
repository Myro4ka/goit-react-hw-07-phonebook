import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/contactsAPI';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addContact(contact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
