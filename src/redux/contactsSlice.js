import { createSlice } from '@reduxjs/toolkit';
const LS_CL_KEY = `contacts_list`;

const initialContactsState = () => {
  const savedContacts = localStorage.getItem(LS_CL_KEY);
  if (!savedContacts) {
    return [];
  }
  return JSON.parse(savedContacts);
};

const setContactsInStorage = data =>
  localStorage.setItem(LS_CL_KEY, JSON.stringify(data));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact(state, action) {
      const newState = [action.payload, ...state];
      setContactsInStorage(newState);
      return newState;
    },
    deleteContact(state, action) {
      const newState = state.filter(contact => contact.name !== action.payload);
      setContactsInStorage(newState);
      return newState;
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
