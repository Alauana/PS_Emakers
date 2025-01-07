import './Footer.css'
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';

function Footer() {
  const nav = useNavigate();

  const clicktoPop = () => {
    nav('/populares')
  }

  const clicktoAccount = () => {
    nav('/conta') 
  }

  return (
    <div className="container">
      <footer>
        <div className="info">
            <div className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <div className="game-dame">
              <h3>Game Dame</h3>
              <p>Seu próximo jogo começa aqui</p>
            </div>
            <div className="explorer">
              <h4>Explorar</h4>
              <div className="links">
                <a href="#" class="inicio" style={{ color: 'inherit', textDecoration: 'inherit' }}>Início</a>
                <button className="populares" onClick={clicktoPop}>Populares</button>
                <button className="conta" onClick={clicktoAccount}>Conta</button>  
              </div>                                      
            </div>
            <div className="contacts">
              <h4>Contato</h4>
              <div className="contato"><MailIcon fontSize='inherit'/> gamegamedame@teste.com</div>
              <div className="contato"><CallIcon fontSize='inherit'/> (99) 9 9999-9999</div>
              <div className="contato"><PlaceIcon fontSize='inherit'/> Shopping X, Lavras - MG </div>
            </div>
        </div>
        <div className="by">
          2024 Game Dame | By Emakers Júnior
        </div>
      </footer>
    </div>        
  )
}

export default Footer