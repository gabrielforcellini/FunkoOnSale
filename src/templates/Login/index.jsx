import React, { useState, useContext } from 'react';
import * as Styled from './styles';

//components
import { Field } from '../../components/Field';

//contexts
import { Context } from '../../context/UserContext';
import { Link } from 'react-router-dom';


export const Login = () => {

    const [user, setUser] = useState({});
    const { login } =useContext(Context);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
    };

    return (
        <Styled.Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Field text="E-mail" type="email" name="email" placeholder="Digite o seu e-mail" handleOnChange={handleChange} />
                <Field text="Senha" type="password" name="password" placeholder="Digite a sua senha" handleOnChange={handleChange} />
                <input type="submit" value="Entrar" />
            </form>
            <p>Não possui conta? <Link to="/cadastrar-usuario">Cadastrar-se</Link></p>
        </Styled.Container>
    );
};
