import './AccountPage.css'
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Navbar from "../NavBar/NavBar"

function AccountPage() {
  const nav = useNavigate();

  const clicktoAdmin = () => {
    nav('/admin')
  }

  const clicktoCart = () => {
    nav('/carrinho')
  }

  return (
    <div id="container">
      <Navbar />
      <div className="AccountPage">
        <div className="dados">
          <div className="text">
            <h1>Olá, Usuário</h1>
            <h2>Seu email é user@email.com</h2>
            <h2>Seu CPF é 000.000.000-00</h2>
          </div>
          <div className="buttons">
            <button className='alterar'>
              Alterar Dados 
              <div className="editIcon">
                <EditIcon fontSize='inherit'/>
              </div>
            </button>
            <button className='excluir'>
              Excluir Conta 
              <div className="deleteIcon">
                <DeleteForeverIcon fontSize='inherit'/> 
              </div>
            </button>
            <button className='admin' onClick={clicktoAdmin}>
              Tela do admin
            </button>
          </div>
        </div>

        <div className="adquiridos">
          <div className="legend">Jogos Adquiridos:</div>
      
          <div className="games">
            <div className="image">
              <img src='/images/bobEsponja.svg' alt='BobEsponja'/>
              <h4>100/100</h4>
            </div> 
            <div className="image">
              <img src='/images/Deliver.svg' alt='Deliver'/>
              <h4>95/100</h4>
            </div> 
            <div className="image">
              <img src='/images/GodofWar.svg' alt='GodofWar'/>
              <h4>75/100</h4>
            </div> 
            <div className="image">
              <img src='/images/deathStranding.svg' alt='deathStranding'/>
              <h4>Adicionar Avaliação</h4>
            </div>                                         
          </div>
        
          <div className="carrinho">
            <button className="carrinho" onClick={clicktoCart}><ShoppingCartOutlinedIcon fontSize='large'/></button>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default AccountPage
