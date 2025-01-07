import './Home.css'
import Navbar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import CarouselMain from './Carousels/CarouselMain'
import CarouselReleases from './Carousels/CarouselReleases'
import { useNavigate } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

function Home() {
  const nav = useNavigate();

  const clicktoCart = () => {
    nav('/carrinho')
  }

  return (
    <div className="container">
      <Navbar/>
      <div className="home">
        <div className="main-carousel">
          <CarouselMain/>
        </div>
        <div className="lancamentos">
          <legend>Lançamentos</legend>
          <CarouselReleases/>
        </div>
      </div>
      <div className="button">
        <button className="carrinho" onClick={clicktoCart}><ShoppingCartOutlinedIcon fontSize="large"/></button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home