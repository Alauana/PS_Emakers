import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormLogin() {
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
                        <button name="createAccount">Criar Conta</button>
                        <button name="forgotPassword">Esqueceu a Senha?</button>
                    </div>
                </main>

                <div className="imagem">  
                    <img src="../public/images/capa.svg" alt="banner" />
                </div>
            </div>    
        </div>
    )
}

export default FormLogin
