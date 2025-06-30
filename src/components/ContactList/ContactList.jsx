import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice';


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



