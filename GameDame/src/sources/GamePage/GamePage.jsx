import './GamePage.css'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function GamePage() {
  // Direcionamento
  const navigate = useNavigate()
  
  const clicktoCart = () =>{
    navigate('/carrinho')
  }

   // Acessar local da aplicação
  const location = useLocation()

  // Acessa a propriedade stade(estado)
  const game = location.state

  // Se não houver nenhum game, nada será renderizado
  if (!game) {
    navigate('/')
    return null
  }

  return (
    <div className="container">
      <Navbar />
      <div className="game-page">
        <div className="desconto">{game.discount}</div>
        <div className="image-promo">
          <img src={game.image} alt={game.title.toLowerCase()} />
          <div className="promo-value">
            <div className="promo">{game.discount}</div>
            <div className="value">{game.price}</div>
          </div>
        </div>
        <div className="game-contents">
          <div className="context-games">
            <div className="content-title">
              <center>{game.title}</center>
            </div>
            <p>{game.description}</p>
          </div>
          <div className="buttonscart">
            <button className="add-carrinho">
              Adicionar ao Carrinho <ShoppingCartIcon fontSize="inherit" />
            </button>
            <button className="reembolso">
              Solicitar Reembolso <ShoppingCartIcon fontSize="inherit" />
            </button>
          </div>
        </div>
        <div className="button">
          <button className="carrinho" onClick={clicktoCart}>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GamePage
