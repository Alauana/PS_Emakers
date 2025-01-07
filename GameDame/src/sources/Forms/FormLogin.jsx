import { useNavigate } from 'react-router-dom'
import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormLogin() {
    const nav = useNavigate();

    const clicktoRegister = () => {
        nav('/registrar')
    }

    const clicktoForgot = () => {
        nav('/recuperar')
    }

    return (
        <div id="container">
            <div className="registerPage">

                <main>
                    <form action="/public/save-classes" id="create-class" method="POST">
                        <legend>Login</legend>

                        <div className="input-block">
                            <input type="text" placeholder="Nome de Usuário"/>        
                        </div>
                        <div className="input-block">
                            <input type="text" placeholder="Senha"/>
                        </div>
                        <div className="arrow">
                            <button className="next">
                                <EastIcon fontSize="inherit"/>
                            </button>
                        </div>
                    </form>

                    <div className="loginUp">
                        <button name="createAccount" onClick={clicktoRegister}>Criar Conta</button>
                        <button name="forgotPassword" onClick={clicktoForgot}>Esqueceu a Senha?</button>
                    </div>
                </main>

                <div className="imagem">  
                    <img src="/images/capa.svg" alt="banner" />
                </div>
            </div>    
        </div>
    )
}

export default FormLogin
