import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import Logo from '../../images/funko-logo-principal.png';

import { Context } from '../../context/UserContext';
import { useContext } from 'react';

export const Navbar = () => {
    const { authenticated } = useContext(Context);

    return (
        <Styled.Container>
            <Styled.Logo>
                <img src={Logo} alt="logo funko em azul" />
                <h2>Funko on Sale</h2>
            </Styled.Logo>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {authenticated ? (<p>Logado</p>) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/cadastrar-usuario">Cadastrar-se</Link>
                        </li>
                    </>
                )}
                <li>
                    <Link to="/listar-funko">Loja</Link>
                </li>
            </ul>
        </Styled.Container>
    );
};
