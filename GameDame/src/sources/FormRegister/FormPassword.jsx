import React from "react";
import './FormRegister.css';
import EastIcon from '@mui/icons-material/East';

function FormPassword() {
    return (
        <div id="container">
            <div className="registerPage">

                <main>
                    <form action="/public/save-classes" id="create-class" method="POST">
                        <legend>Recuperar<br/>Conta</legend>

                        <div className="input-block">
                            <input type="email" placeholder="E-mail"/>
                        </div>
                        <div className="arrow">
                            <button className="next">
                                <EastIcon fontSize="inherit"/>
                            </button>
                        </div>
                    </form>

                    <div className="loginUp">
                        <button name="createAccount">Criar Conta</button>
                        <button name="login">Fazer Login</button>
                    </div>
                </main>

                <div className="imagem">  
                    <img src="../public/images/capa.svg" alt="banner" />
                </div>
            </div>    
        </div>
    )
}

export default FormPassword
