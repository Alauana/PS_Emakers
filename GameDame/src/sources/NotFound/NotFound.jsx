import "./NotFound.css"
import { useNavigate } from "react-router-dom";

function NotFound() {
  // Direcionamento
  const nav = useNavigate();

  const clicktoCart = () => {
    nav('/lancamentos')
  }

  return (
    <div className="container">
      <div className="NotFound">
        <div className="error-message">
          <div className="ops">Ops...</div>
          Parece que a página que você está procurando não existe, campeão!
          <button className="return" onClick={clicktoCart}>Retornar para Home</button>
        </div>
        <img src="/images/chibi.png" alt="erro" />
      </div>
    </div>
  )
}

export default NotFound