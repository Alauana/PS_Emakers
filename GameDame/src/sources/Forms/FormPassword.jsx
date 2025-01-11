import { useNavigate } from 'react-router-dom'
import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormPassword() {
  // Direcionamento
  const nav = useNavigate();

  const clicktoRegister = () => {
      nav('/registrar')
  }

  const clicktoLogin = () => {
      nav('/login')
  }
  
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
            <button name="createAccount" onClick={clicktoRegister}>Criar Conta</button>
            <button name="login" onClick={clicktoLogin}>Fazer Login</button>
          </div>
        </main>

        <div className="imagem">  
          <img src="/images/capa.svg" alt="banner" />
        </div>
      </div>    
    </div>
  )
}

export default FormPassword
