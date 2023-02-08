import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = ({ addToContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleCreateNewContact = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    addToContacts(newContact);
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

ContactForm.propTypes = {
  addToContacts: PropTypes.func.isRequired,
};
