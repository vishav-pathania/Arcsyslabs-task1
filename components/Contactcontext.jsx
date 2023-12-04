import React, { createContext, useState, useContext } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Caressa Jessalin',
      lastMessage: 'Lorem ipsum dolor sit am..',
      messages: [
        { id: 1, sender: 'Caressa Jessalin', text: 'Hey!', timestamp: new Date() },
        { id: 2, sender: 'You', text: 'Hi there!', timestamp: new Date() },
        // Add more messages as needed
      ]
    },
    {
      id: 2,
      name: 'Letty Bride',
      lastMessage: 'Lorem ipsum dolor sit am..',
      messages: [
        { id: 1, sender: 'Letty Bride', text: 'Hello!', timestamp: new Date() },
        { id: 2, sender: 'You', text: 'Hi Letty!', timestamp: new Date() },
        // Add more messages as needed
      ]
    },
    // Add more contacts as needed
  ]);

  // Function to add a new message to a specific contact
  const addMessageToContact = (contactId, newMessage) => {
    const updatedContacts = contacts.map(contact => {
      if (contact.id === contactId) {
        return {
          ...contact,
          messages: [...contact.messages, newMessage],
          lastMessage: newMessage.text,
        };
      }
      return contact;
    });

    setContacts(updatedContacts);
  };

  return (
    <ContactContext.Provider value={{ contacts, setContacts, addMessageToContact }}>
      {children}
    </ContactContext.Provider>
  );
};