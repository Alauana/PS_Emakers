import "./Releases.css"
import { useNavigate } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Navbar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

function Releases() {
  // Direcionamento
  const nav = useNavigate();

  const clicktoCart = () => {
    nav('/carrinho')
  }

  return (
    <div className="container">
      <Navbar />
      <div className="popular">
        <h1>Populares</h1>
        <div className="gameLeft">
          <div className="banner">
            <div className="circle">1º</div>
            <img src="/images/godofwarpop.svg" alt="GodOfWar" />
          </div>
          <div className="description">
            <div className="name"><center>God of War</center></div>
            <p>Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.</p>
          </div>
        </div>
        <div className="gameRight">
          <div className="banner">
            <div className="circle">2º</div>
            <img src="/images/horizon.svg" alt="Horizon" />
          </div>
          <div className="description">
            <div className="name"><center>Horizon Zero Dawn</center></div>
            <p>Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.</p>
          </div>
        </div>
        <div className="gameLeft">
          <div className="banner">
            <div className="circle">3º</div>
            <img src="/images/DaysGone.svg" alt="DaysGone" />    
          </div>
          <div className="description">
            <div className="name"><center>Days Gone</center></div>
            <p>Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.</p>
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

export default Releases