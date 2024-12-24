import { useState } from 'react'
import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormRegister() {
    const [cpf, setCpf] = useState("");

    const CPFmask = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, "");
        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, (match, p1, p2, p3, p4) =>
                `${p1}.${p2}.${p3}-${p4}`
            );
        }
        setCpf(value);
    };

    return (
        <div id="container">
            <div className="registerPage">

                <main>
                    <form action="/public/save-classes" id="create-class" method="POST">
                        <legend>Registrar</legend>

                        <div className="input-block">
                            <input type="text" placeholder="Nome de Usuário"/>        
                        </div>
                        <div className="input-block">
                            <input type="email" placeholder="E-mail"/>
                        </div>
                        <div className="input-block">
                            <input type="text" value={cpf} onChange={CPFmask} maxLength="14" placeholder="CPF"/>
                        </div>
                        <div className="input-block">
                            <input type="text" placeholder="Senha"/>
                        </div>
                        <div className="input-block">
                            <input type="text" placeholder="Confirmar Senha"/>
                        </div>

                        <div className="arrow">
                            <button className="next">
                                <EastIcon fontSize="inherit"/>
                            </button>
                        </div>
                    </form>

                    <div className="loginUp">
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

export default FormRegister
