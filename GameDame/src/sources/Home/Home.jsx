import './Home.css'
import Navbar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import CarouselMain from './Carousels/CarouselMain'
import CarouselReleases from './Carousels/CarouselReleases'

function Home() {
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
      <Footer/>
    </div>
  )
}

export default Home