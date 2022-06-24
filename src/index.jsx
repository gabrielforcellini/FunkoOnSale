import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './templates/Home';
import { PageNotFound } from './templates/PageNotFound';
import { Login } from './templates/Login';
import { CadastroUser } from './templates/CadastroUser';
import { ListarFunkos } from './templates/ListarFunkos';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { Message } from './components/Message';
import { CadastroFunko } from './templates/CadastroFunko';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Message />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar-usuario" element={<CadastroUser />} />
          <Route path="/cadastrar-funko" element={<CadastroFunko />} />
          <Route path="/listar-funko" element={<ListarFunkos />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
