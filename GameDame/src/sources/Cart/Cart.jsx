import './Cart.css'
import Navbar from "../NavBar/NavBar"
import PaymentIcon from '@mui/icons-material/Payment'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCart } from './Context/Context'

function Cart() {
  // Retorna os objetos cart e total
  const { cart, total } = useCart()

  return (
    <div className="container">
      <Navbar />
      <div className="cart">
        <div className="escolhidos">
          <legend>Carrinho de Compras</legend>
          {cart.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.image} alt={item.title.toLowerCase()} />
              <div className="game-title">
                {item.title}
                <div className="plataform">Plataforma: {item.platform}</div>
              </div>
              <div className="price">{item.price}</div>
            </div>
          ))}
          <div className="total">
            Total
            <div className="valor-total">R$ {total.toFixed(2).replace('.', ',')}</div>
          </div>
        </div>

        <div className="pagamento">
          <legend>Método de Pagamento</legend>
          <div className="formas">
            <div className="option">
              <img src="/images/pix.svg" alt="pix" />
              Pix
              <input type="radio" id="pix" name="selecao" />
            </div>
            <div className="option">
              <div className="payment-icon"><PaymentIcon fontSize="inherit" /></div>
              Cartão de Crédito
              <input type="radio" id="cartao" name="selecao" />
            </div>
          </div>
          <div className="termos">
            <input type="radio" id="termos" />
            Eu aceito os termos e condições
          </div>
          <button className="finish">Finalizar compra <ShoppingCartIcon fontSize="inherit" /></button>
        </div>
      </div>
    </div>
  )
}

export default Cart
