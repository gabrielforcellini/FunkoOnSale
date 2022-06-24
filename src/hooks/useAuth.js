//hook para autenticar usuario
import { api } from '../services/api';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFlashMessage from './useFlashMessage';

//api

export default function useAuth() {
  const { setFlashMessage } = useFlashMessage();
  const register = async (user) => {
    let msgText = "Cadastro Realizado com sucesso!";
    let msgType = "success";
    try {
      const data = await api.post('/user/register', user).then((response) => {
        return response.data
      })
      console.log(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
    }

    setFlashMessage(msgText, msgType);
  }

  return { register }
}