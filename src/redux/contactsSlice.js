import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => handlePending(state))
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(addContactThunk.pending, state => handlePending(state))
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.rejected, (state, action) =>
        handlePending(state, action)
      )
      .addCase(deleteContactThunk.pending, state => handlePending(state))
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) =>
        handlePending(state, action)
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
