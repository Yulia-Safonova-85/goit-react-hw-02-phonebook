import React, { Component } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  
  addContact = newContact => {
    this.setState(prevState => {
      return {
        name: [...prevState.name, newContact.name]
      }
    })
  };
  
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
      
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

 
render() {
  
  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneForm onSave={ this.addContact } />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onChangeFilter={this.changeFilter } />
      <ContactList contacts={this.state.contacts} onDeleteContact={ this.deleteContact} />
    
    </div>
  );
}
  
};
