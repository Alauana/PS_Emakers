import './CarouselReleases.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { useCart } from '../../Cart/Context/Context'

const CarouselReleases = () => {
  const { addToCart } = useCart()

  const handleBuyNow = (game) => {
    addToCart(game)
  }

  const games = [
    {
      image: "/images/bobEsponja.svg",
      title: "Sponge Bob: Battle for BikiniBottom",
      platform: "PC",
      price: "R$ 299,00"
    },
    {
      image: "/images/Deliver.svg",
      title: "Deliver us Mars",
      platform: "PC",
      price: "R$ 299,00"
    },
    {
      image: "/images/SpellForce.svg",
      title: "SpellForce",
      platform: "PC",
      price: "R$ 299,00"
    },
    {
      image: "/images/deathStranding.svg",
      title: "Death Stranding",
      platform: "PC",
      price: "R$ 299,00"
    },
    {
      image: "/images/perish.svg",
      title: "Perish",
      platform: "PC",
      price: "R$ 299,00"
    },
    {
      image: "/images/GodofWar.svg",
      title: "God of War",
      platform: "PC",
      price: "R$ 199,95"
    }
  ]

  return (
    <div className="carrossel-releases" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Swiper
        className="releases-container"
        navigation={true}
        loop={true}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          780: { slidesPerView: 3, spaceBetween: 15 },
          1440: { slidesPerView: 5, spaceBetween: 5 },
        }}
      >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="image-text">
              <img src={game.image} alt={game.title.toLowerCase()} />
              <div className="game-title">{game.title}</div>
              <div className="plataform">Plataforma: {game.platform}</div>
              <div className="price">{game.price}</div>
              <button onClick={() => handleBuyNow(game)}>Comprar Agora</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselReleases
