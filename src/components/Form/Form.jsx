import React, { Component } from "react";
import { BtnSubmit, FormAddContact, ContactInput } from "./Form.styled";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  hadleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubbmit = (e) => {
    e.preventDefault();

    if (
      this.props.contacts.find((contact) => contact.name === this.state.name)
    ) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
      this.reset();
    }

    this.reset();
  };

  handleChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <FormAddContact onSubmit={this.handleSubbmit}>
          <label>
            {" "}
            Name
            <ContactInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hadleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            {" "}
            Number
            <ContactInput
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <BtnSubmit type="submit">Add contact</BtnSubmit>
        </FormAddContact>
      </div>
    );
  }
}

export default Form;
