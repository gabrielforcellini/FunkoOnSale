import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/UserContext';
import * as Styled from './styles';
import api from '../../services/api';
import useFlashMessage from '../../hooks/useFlashMessage';
import { FunkoForm } from '../../components/FunkoForm';

export const CadastroFunko = () => {
    const { authenticated } = useContext(Context);
    const navigate = useNavigate();

    //necessario para nao encontrar a rota caso nao esteja autenticado!
    useEffect(() => {
        if(!authenticated){
            navigate("/login");
        };
    }, []);

    return (
        <Styled.Container>
            <h1>Cadastre um Funko</h1>
            <p>Depois ele ficará a venda na loja.</p>
            <FunkoForm />
        </Styled.Container>
    );
};
