import React from "react";
import {
  ContactList,
  ContactData,
  ContactItem,
  ContactButton,
} from "./Contact.styled";

const ContactsList = ({ contacts, deleteContatcs }) => {
  return (
    <div>
      <ContactList>
        {contacts.map((contact) => (
          <ContactItem key={contact.id}>
            <ContactData>{contact.name}:</ContactData>
            <ContactData>{contact.number}</ContactData>
            <ContactButton onClick={() => deleteContatcs(contact.id)}>
              Delete
            </ContactButton>
          </ContactItem>
        ))}
      </ContactList>
    </div>
  );
};

export default ContactsList;
