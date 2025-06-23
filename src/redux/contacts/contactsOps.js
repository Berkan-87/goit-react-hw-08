import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://67bb6127fbe0387ca139ea86.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;  // Получаем токен из состояния

    // Добавляем токен в заголовок запроса
    const { data } = await axios.get('/contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    toast.error('Ошибка загрузки контактов!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;  // Получаем токен из состояния

    // Добавляем токен в заголовок запроса
    const { data } = await axios.post('/contacts', contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(`Контакт ${contact.name} добавлен!`);
    return data;
  } catch (error) {
    toast.error('Ошибка добавления контакта!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;  // Получаем токен из состояния

    // Добавляем токен в заголовок запроса
    await axios.delete(`/contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success('Контакт удален!');
    return contactId;
  } catch (error) {
    toast.error('Ошибка удаления контакта!');
    return thunkAPI.rejectWithValue(error.message);
  }
});



