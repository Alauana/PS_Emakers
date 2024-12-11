import React from "react";
import './FormRegister.css'

function FormRegister() {
    return (
        <div>
            <h1>Registrar</h1>
            <form>
                <input type="text" placeholder="Nome de Usuário"/>
                <br/><br/>
                <input type="email" placeholder="E-mail"/>
                <br/><br/>
                <input type="text" placeholder="CPF"/>
                <br/><br/>
                <input type="text" placeholder="Senha"/>
                <br/><br/>
                <input type="text" placeholder="Confirmar Senha"/>
                <br/>
                <button type="submit">&rarr;</button>
            </form>
        </div>
    )
}

export default FormRegister
