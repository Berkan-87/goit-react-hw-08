import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../selectors/contactsSelectors'; // ya da doğru dosya yolu neyse


export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, state => state.filters.name],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
