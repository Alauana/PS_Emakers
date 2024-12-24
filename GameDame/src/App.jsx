import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import FormRegister from './sources/FormRegister/FormRegister'
import FormLogin from './sources/FormRegister/FormLogin'
import FormPassword from './sources/FormRegister/FormPassword'
import Home from './sources/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <FormLogin /> }/>
        <Route path="/registrar" element={ <FormRegister /> }/>
        <Route path="/recuperar" element={ <FormPassword /> }/>
        <Route path="/home" element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
