import React, { useState } from 'react';
import * as Styled from './styles';
import { Field } from '../Field';

export const FunkoForm = () => {

    const handleChange = (e) => {

    };

    const handleNumberChange = (e) => {
        if(e.target.value <= 0){
            e.target.value = 0;
        }
    }

    return (
        <Styled.Container>
            <form>
                <Field text="Titulo" type="text" name="title" placeholder="Informe o Titulo do post" handleOnChange={handleChange} />
                <Field text="Descrição" type="text" name="description" placeholder="Informe a url da imagem" handleOnChange={handleChange} />
                <Field text="Preço" type="number" name="price" placeholder="Informe o preço" handleOnChange={handleNumberChange} />
                <Field text="Url Imagem" type="text" name="imageurl" placeholder="Informe a url da imagem" handleOnChange={handleChange} />
            </form>
            <input type="submit" value="Cadastrar Funko" />
        </Styled.Container>
    );
};
