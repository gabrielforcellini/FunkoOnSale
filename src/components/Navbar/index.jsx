import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

import Logo from '../../images/funko-logo-principal.png';

import { Context } from '../../context/UserContext';
import { useContext } from 'react';

export const Navbar = () => {
    const { authenticated, logout } = useContext(Context);

    return (
        <Styled.Container>
            <Styled.Logo>
                <img src={Logo} alt="logo funko em azul" />
                <h2>Funko on Sale</h2>
            </Styled.Logo>
            <ul>
                {!authenticated && (
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                )}
                <li>
                    <Link to="/listar-funko">Loja</Link>
                </li>
                {authenticated
                    ? (
                        <>
                            <li>
                                <Link to="/cadastrar-funko">Cadastrar um Funko</Link>
                            </li>
                            <li>
                                <Link to="/minha-conta">Minha Conta</Link>
                            </li>
                            <li onClick={logout}>
                                Sair
                            </li>
                        </>
                    )
                    : (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/cadastrar-usuario">Cadastrar-se</Link>
                            </li>
                        </>
                    )}
            </ul>
        </Styled.Container>
    );
};
