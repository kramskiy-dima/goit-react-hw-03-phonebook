import React, { Component } from "react";
import shortid from "shortid";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));

    if (localContacts) {
      this.setState({ contacts: [...localContacts] });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      console.log("обновилось поле ");
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const alreadyContacts = contacts.find((item) => item.name === name);
    if (alreadyContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((item) => item.id !== contactId),
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
