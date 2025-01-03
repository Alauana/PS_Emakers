import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormRegister() {
    // máscara CPF
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
    }

    // endereçar botões
    const nav = useNavigate();

    const clicktoLogin = () => {
        nav('/login')
    }

    return (
        <div id="container">
            <div className="registerPage">
                <main>
                    <form action="/public/save-classes" id="create-class" method="POST">
                        <legend>Registrar</legend>

                        <div className="input-block" id='username'>
                            <input type="text" id='username' placeholder="Nome de Usuário"/>
                            <a>Campo obrigatório</a>        
                        </div>
                        <div className="input-block" id='email'>
                            <input type="email" id='email' placeholder="E-mail"/>
                            <a>Campo obrigatório</a>        
                        </div>
                        <div className="input-block" id='cpf'>
                            <input type="text" id='cpf' value={cpf} onChange={CPFmask} maxLength="14" placeholder="CPF"/>
                            <a>Campo obrigatório</a>        
                        </div>
                        <div className="input-block" id='password'>
                            <input type="password" id='password' placeholder="Senha"/>
                            <a>Campo obrigatório</a>        
                        </div>
                        <div className="input-block" id='password-confirmation'>
                            <input type="password" id='password-confirmation' placeholder="Confirmar Senha"/>
                            <a>As senhas precisar ser iguais</a>        
                        </div>

                        <div className="arrow">
                            <button className="next">
                                <EastIcon fontSize="inherit"/>
                            </button>
                        </div>
                    </form>

                    <div className="loginUp">
                        <button name="login" onClick={clicktoLogin}>Fazer Login</button>
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
