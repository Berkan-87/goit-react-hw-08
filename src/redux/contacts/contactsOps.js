import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://67bb6127fbe0387ca139ea86.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;  

    
    const { data } = await axios.get('/contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    toast.error('Failed to load contacts!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;  

    
    const { data } = await axios.post('/contacts', contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(`Contact ${contact.name} added successfully!`);
    return data;
  } catch (error) {
    toast.error('Error adding contact!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;  

    
    await axios.delete(`/contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success('Contact deleted!');
    return contactId;
  } catch (error) {
    toast.error('Error deleting contact!');
    return thunkAPI.rejectWithValue(error.message);
  }
});



