import * as Styled from './styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import useFlashMessage from '../../hooks/useFlashMessage';
import { FunkoForm } from '../../components/FunkoForm';
import { useEffect } from 'react';

export const CadastroFunko = () => {
    const [token] = useState(localStorage.getItem('token') || '');
    const { setFlashMessage } = useFlashMessage();
    const navigate = useNavigate();

    const registerFunko = async (funko) => {
        let msgType = "success";
        const data = await api.post("/funko/create", funko, { headers: { 'Authorization': `Bearer ${JSON.parse(token)}` } })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                msgType = 'error';
                return err.response.data;
            })

        setFlashMessage(data.message, msgType);
        if (msgType !== 'error') {
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
