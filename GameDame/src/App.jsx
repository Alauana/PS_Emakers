import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import FormRegister from './sources/Forms/FormRegister'
import FormLogin from './sources/Forms/FormLogin'
import FormPassword from './sources/Forms/FormPassword'
import Relases from './sources/Relases/Relases'
import AccountPage from './sources/AccountPage/AccountPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <FormLogin /> }/>
        <Route path="/registrar" element={ <FormRegister /> }/>
        <Route path="/recuperar" element={ <FormPassword /> }/>
        <Route path="/populares" element={ <Relases /> }/>
        <Route path="/conta" element={ <AccountPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
