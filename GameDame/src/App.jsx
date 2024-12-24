import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import FormRegister from './sources/FormRegister/FormRegister'
import FormLogin from './sources/FormRegister/FormLogin'
import FormPassword from './sources/FormRegister/FormPassword'
import AccountPage from './sources/AccountPage/AccountPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <FormLogin /> }/>
        <Route path="/registrar" element={ <FormRegister /> }/>
        <Route path="/recuperar" element={ <FormPassword /> }/>
        <Route path="/conta" element={ <AccountPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
