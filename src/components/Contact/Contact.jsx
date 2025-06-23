// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/contactsOps';
// import toast from 'react-hot-toast';
// import styles from './Contact.module.css';

// const Contact = ({ id, name, number }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(id));
//     toast.success(`Контакт ${name} удален!`);
//   };

//   return (
//     <li className={styles.contactItem}>
//       <span>{name}: {number}</span>
//       <button onClick={handleDelete}>Delete</button>
//     </li>
//   );
// };

// export default Contact;

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from '../../index.css';

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



