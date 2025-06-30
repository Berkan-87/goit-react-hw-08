import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';


const Contact = ({ id, name, phone_number }) => {
  const dispatch = useDispatch();

  return (
    <li className="ContactItem">
      <span>{name}: {phone_number ? phone_number : 'No phone'}</span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;



