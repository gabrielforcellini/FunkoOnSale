import * as Styled from './styles';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import useFlashMessage from '../../hooks/useFlashMessage';
import { FunkoForm } from '../../components/FunkoForm';

export const CadastroFunko = () => {
    const [token] = useState(localStorage.getItem('token') || '');
    const { setFlashMessage } = useFlashMessage();
    const navigate = useNavigate();

    const registerFunko = async(funko) => {
        let msgText = "Funko Registered!";
        let msgType = "success";
        try {
            await api.post('/funko/create', funko, {Authorization: `Bearer ${JSON.parse(token)}`})
            .then((response) => {
                return response.data
            });
        } catch (error) {
            msgText = error.response.data.error;
            msgType = 'error';
        }

        setFlashMessage(msgText, msgType);
        if(msgType !== 'error'){
            navigate("/listar-funko");
        }
    }
    

    return (
        <Styled.Container>
            <h1>Cadastre um Funko</h1>
            <p>Depois ele ficará a venda na loja.</p>
            <FunkoForm handleSubmit={registerFunko} />
        </Styled.Container>
    );
};
