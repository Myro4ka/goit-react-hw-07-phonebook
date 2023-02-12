import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { contactsCheking } from 'utils/contactsCheking';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleCreateNewContact = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const inContactList = contacts.filter(contact =>
      contactsCheking(contact, newContact)
    ).length;

    if (!inContactList) {
      dispatch(addContact(newContact));
    }
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <form className={css.form} onSubmit={handleCreateNewContact}>
      <p className={css.title}>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleNameChange}
        value={name}
        required
      />
      <p className={css.title}>Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleNumberChange}
        value={number}
        required
      />
      <button>Add contact</button>
    </form>
  );
};
