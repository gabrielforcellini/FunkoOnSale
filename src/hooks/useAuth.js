//hook para autenticar usuario
import { api } from '../services/api';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessage';


//api
export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true);
    }
  }, []);

  const register = async (user) => {
    let msgText = "Cadastro Realizado com sucesso!";
    let msgType = "success";
    try {
      const data = await api.post('/user/register', user).then((response) => {
        return response.data
      })
      authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
    }

    setFlashMessage(msgText, msgType);
  };

  const authUser = async (data) => {
    setAuthenticated(true);

    localStorage.setItem('token', JSON.stringify(data.token));

    navigate("/cadastrar-funko");
  };

  return { authenticated, register };
}