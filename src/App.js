import React, { Component } from "react";
import shortid from "shortid";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const alreadyContacts = this.state.contacts.find(
      (item) => item.name === name
    );
    if (alreadyContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== contactId),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedName = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <div>
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList
              filterContacts={this.filterContacts()}
              deleteContact={this.deleteContact}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
