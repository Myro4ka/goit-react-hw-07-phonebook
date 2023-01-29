import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  handleCreateNewContact = () => {
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.addToContacts(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div className={css.form}>
        <p className={css.title}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <p className={css.title}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleChange}
          value={this.state.number}
          required
        />
        <button onClick={this.handleCreateNewContact}>Add contact</button>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addToContacts: PropTypes.func.isRequired,
};
