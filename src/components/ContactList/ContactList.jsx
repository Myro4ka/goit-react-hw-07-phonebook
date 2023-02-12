import css from '../ContactList/ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
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
