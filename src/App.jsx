import React from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form/";
import ContactsList from "./components/Contacts";
import Filter from "./components/Filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContacts = ({ name, number }) => {
    const userContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [userContact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
    // console.log(contactId)
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  changeInputFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 componentDidMount() {
    const contacts = localStorage.getItem('contacts')
   const parsedContacts = JSON.parse(contacts)
  
  
   if (parsedContacts) {
     this.setState({ contacts: parsedContacts }) 
     
   }

    
  }



  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
    {
     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))

     }

  }

 
  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div>
        <Form onSubmit={this.addContacts} contacts={this.state.contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeInputFilter} />
        <ContactsList
          contacts={visibleContacts}
          deleteContatcs={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
