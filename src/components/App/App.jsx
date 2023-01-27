import { Component } from 'react';
import { Section } from 'components/Section/Section';
// import { Phonebook } from 'components/Phonebook/Phonebook';
// import { Contacts } from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddToContacts = () => {
    const newContact = { name: this.state.name, id: nanoid() };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
      name: '',
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <div>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={e => this.setState({ name: e.target.value })}
              value={this.state.name}
              required
            />
            <button onClick={this.handleAddToContacts}>Add contact</button>
          </div>
        </Section>
        <Section title="Contacts">
          <ul>
            {this.state.contacts.map(contact => {
              console.log(contact.id);
              return <li key={contact.id}>{contact.name}</li>;
            })}
          </ul>
        </Section>
      </>
    );
  }
}
