import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormRegister from './sources/FormRegister/FormRegister'
import FormLogin from './sources/FormRegister/FormLogin'
import FormPassword from './sources/FormRegister/FormPassword'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrar" element={ <FormRegister /> }/>
        <Route path="/login" element={ <FormLogin /> }/>
        <Route path="/recuperar" element={ <FormPassword /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
