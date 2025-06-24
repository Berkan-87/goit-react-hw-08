import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOps';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`${name} Already in contacts!`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    toast.success(`Contact ${name} Successfully added!`);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Phone number"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;


