import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Phonebook />
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
      </>
    );
  }
}
