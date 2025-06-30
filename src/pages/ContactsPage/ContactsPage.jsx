import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { selectLoading, selectError } from '../../redux/contacts/contactsSlice';

import { AppBar } from '../../components/AppBar/AppBar';
import { AuthNav } from '../../components/AuthNav/AuthNav';
import { Navigation } from '../../components/Navigation/Navigation';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <AppBar />
      <Navigation />
      <UserMenu />
      <AuthNav />

      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Contacts Page</h1>

      <SearchBox />

      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', padding: '0 40px' }}>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
        <div style={{ flex: 2 }}>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
