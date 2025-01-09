import './GamePage.css'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function GamePage() {
  const nav = useNavigate();

  const clicktoCart = () => {
    nav('/carrinho')
  }

  return(
    <div className="container">
      <Navbar />
      <div className="game-page">
        <div className="desconto">98%</div>
        <div className="image-promo">
          <img src="/images/GodOfWarBanner.svg" alt="god-of-war"/>
          <div className="promo-value">
            <div className="promo">-40%</div>
            <div className="value">R$ 119,95</div>
          </div>
        </div>
        <div className="game-contents">
          <div className="context-games">
            <div className="content-title"><center>God of War</center></div>
            <p>Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.</p>
          </div>
          <div className="buttonscart">
            <button className="add-carrinho">
              Adicionar ao Carrinho <ShoppingCartIcon fontSize="inherit"/>
            </button>
            <button className="reembolso">
              Solicitar Reembolso <ShoppingCartIcon fontSize="inherit"/>
            </button>
          </div>
        </div>
        <div className="button">
          <button className="carrinho" onClick={clicktoCart}><ShoppingCartOutlinedIcon fontSize="large"/></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GamePage