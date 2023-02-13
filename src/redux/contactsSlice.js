import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContactThunk.fulfilled](state, action) {
      state.items.unshift(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
