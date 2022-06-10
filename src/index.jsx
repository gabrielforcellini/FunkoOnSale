import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './templates/Home';
import { PageNotFound } from './templates/PageNotFound';
import { Login } from './templates/Login';
import { CadastroUser } from './templates/CadastroUser';
import { CadastroFunko } from './templates/CadastroFunko';
import { ListarFunkos } from './templates/ListarFunkos';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar-usuario" element={<CadastroUser />} />
        <Route path="/cadastrar-funko" element={<CadastroFunko />} />
        <Route path="/listar-funko" element={<ListarFunkos />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
