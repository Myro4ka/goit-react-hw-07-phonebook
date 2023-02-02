import { Component } from 'react';
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
export class App extends Component {
  state = {
    contacts: defaultContactState,
    filter: '',
  };

  addToContacts = newContact => {
    const isContactExist = this.state.contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (isContactExist) {
      return alert(`${newContact.name} is already in contacts`);
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  applyFilterContacts = () => {
    if (this.state.filter) {
      const filteredContacts = this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
      return filteredContacts;
    }
    return this.state.contacts;
  };

  deleteContact = deletedIdContact => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(
        contact => contact.id !== deletedIdContact
      ),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addToContacts={this.addToContacts} />
        </Section>
        <Section title="Contacts">
          <Filter handleChange={this.handleChange} />
          <ContactList
            applyFilterContacts={this.applyFilterContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
