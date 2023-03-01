import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';

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

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
     return  alert(`${name} is already in contacts`)
    }
    this.setState(prevState => {
      return {
        name: [...prevState.name, contact]
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

  findContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
 
render() {
  < GlobalStyle/>
  return (
    <Layout>
      <h1>Phonebook</h1>
      <PhoneForm onSave={ this.addContact } />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onChangeFilter={this.changeFilter } />
      <ContactList contacts={this.findContact()} onDeleteContact={ this.deleteContact} />
    
    </Layout>
  );
}
  
};
