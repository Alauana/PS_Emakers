import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import FormRegister from './sources/Forms/FormRegister'
import FormLogin from './sources/Forms/FormLogin'
import FormPassword from './sources/Forms/FormPassword'
import Releases from './sources/Releases/Releases'
import AccountPage from './sources/AccountPage/AccountPage'
import Home from './sources/Home/Home'
import Admin from './sources/Admin/Admin'
import Cart from './sources/Cart/Cart'
import NotFound from './sources/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <FormLogin /> }/>
        <Route path="/login" element={ <FormLogin /> }/>
        <Route path="/lancamentos" element={ <Home />}/>
        <Route path="/registrar" element={ <FormRegister /> }/>
        <Route path="/recuperar" element={ <FormPassword /> }/>
        <Route path="/populares" element={ <Releases /> }/>
        <Route path="/conta" element={ <AccountPage /> }/>
        <Route path="/admin" element={ <Admin /> }/>
        <Route path="/carrinho" element={ <Cart /> }/>
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App