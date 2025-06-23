// import { useSelector } from 'react-redux';
// import Contact from '../Contact/Contact';
// import styles from './ContactList.module.css';

// const ContactList = () => {
//   const contacts = useSelector(state => state.contacts.items);
//   const filter = useSelector(state => state.filters.name.toLowerCase());

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter) || contact.number.includes(filter)
//   );

//   return (
//     <ul className={styles.contactList}>
//       {filteredContacts.map(({ id, name, number }) => (
//         <Contact key={id} id={id} name={name} number={number} />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, phone_number }) => (
        <Contact key={id} id={id} name={name} phone_number={phone_number} />
      ))}
    </ul>
  );
};

export default ContactList;



