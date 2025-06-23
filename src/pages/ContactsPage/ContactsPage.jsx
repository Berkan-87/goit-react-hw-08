// import React from 'react';
// import { useSelector } from 'react-redux';
// import ContactForm from '../../components/ContactForm/ContactForm';  // форма для добавления контактов
// import { selectContacts } from '../../redux/contacts/contactsSlice';  // селектор для получения контактов

// const ContactsPage = () => {
//   // Получаем список контактов из Redux
//   const contacts = useSelector(selectContacts);

//   return (
//     <div>
//       <h1>Contacts Page</h1>
//       <p>Здесь будет ваша телефонная книга.</p>

//       <ContactForm />  {/* Форма для добавления контактов */}
      
//       {/* Если контакты есть, отображаем их */}
//       {contacts.length > 0 ? (
//         <ul>
//           {contacts.map((contact) => (
//             <li key={contact.id}>
//               {contact.name}: {contact.number}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Нет контактов. Добавьте свой первый контакт.</p>
//       )}
//     </div>
//   );
// };

// export default ContactsPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/contactsSlice';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Contacts Page</h1>
      <ContactForm />
      
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет контактов. Добавьте свой первый контакт.</p>
      )}
    </div>
  );
};

export default ContactsPage;
