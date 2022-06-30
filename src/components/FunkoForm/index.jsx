import React, { useState } from 'react';
import * as Styled from './styles';

import { Field } from '../Field';

export const FunkoForm = ({ handleSubmit }) => {
    const [funko, setFunko] = useState({});

    const handleChange = (e) => {
        setFunko({ ...funko, [e.target.name]: e.target.value });
    };

    const handleNumberChange = (e) => {
        if (e.target.value <= 0) {
            e.target.value = 0;
        }
        setFunko({ ...funko, price: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(funko);
    }

    return (
        <Styled.Container>
            <form onSubmit={submit}>
                <Field text="Titulo" type="text" name="title" placeholder="Informe o Titulo do funko" handleOnChange={handleChange} />
                <Field text="Descrição" type="text" name="description" placeholder="Informe a descrição do funko" handleOnChange={handleChange} />
                <Field text="Preço" type="number" name="price" placeholder="Informe o preço do funko" handleOnChange={handleNumberChange} step="0.01" />
                <Field text="Url Imagem" type="text" name="imageUrl" placeholder="Informe a url da imagem do funko" handleOnChange={handleChange} />
                <input type="submit" value="Cadastrar Funko" />
            </form>
        </Styled.Container>
    );
};
