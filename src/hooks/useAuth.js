//hook para autenticar usuario
import { api } from '../services/api';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//api

export default function useAuth() {
  const register = async (user) => {
    try {
      const data = await api.post('/user/register', user).then((response) => {
        return response.data
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return { register }
}