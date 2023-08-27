import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, ItemWrapper, Button } from './ContactListItem.styled'; 


const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem key={id}>
      <ItemWrapper>
        <p>{name}: </p>
        <p>{number}</p>
      </ItemWrapper>
      <Button type="button" onClick={onDeleteContact}>
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactListItem;