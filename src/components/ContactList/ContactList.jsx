import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import {  List } from './ContactList.styled'; 
import { ItemWrapper} from '../ContactListItem/ContactListItem.styled'; 



const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    return <ItemWrapper>No contacts found.</ItemWrapper>;
  }

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;



