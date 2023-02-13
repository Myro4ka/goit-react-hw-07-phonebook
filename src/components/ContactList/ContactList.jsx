import css from '../ContactList/ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contactsOperations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filteredContacts = () => {
    if (contacts?.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      );
    }
  };

  return (
    <>
      {contacts.length !== 0 && (
        <ul className={css.list}>
          {filteredContacts().map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} name={name} number={number} id={id} />
            );
          })}
        </ul>
      )}
    </>
  );
};
