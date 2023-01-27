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
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleChange}
              value={this.state.number}
              required
            />
            <button onClick={this.handleAddToContacts}>Add contact</button>
          </div>
        </Section>
        <Section title="Contacts">
          <ul>
            {this.state.contacts.map(contact => {
              console.log(contact.id);
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
          </ul>
        </Section>
      </>
    );
  }
}
