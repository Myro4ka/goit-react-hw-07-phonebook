import { useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const defaultContactState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? defaultContactState
  );
  const [filter, setFilter] = useState('');

  const addToContacts = newContact => {
    const isContactExist = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (isContactExist) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const applyFilterContacts = () => {
    if (filter) {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }
    return contacts;
  };

  const deleteContact = deletedIdContact => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== deletedIdContact)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addToContacts={addToContacts} />
      </Section>
      <Section title="Contacts">
        <Filter handleChange={handleChange} />
        <ContactList
          applyFilterContacts={applyFilterContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
