import './CarouselMain.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'

const games = [
  {
    title: 'Days Gone',
    description:
      'Explore um mundo devastado e lute contra hordas de criaturas enquanto tenta sobreviver como um dos últimos homens da Terra.',
    image: '/images/DaysGone.svg',
    discount: '-15%',
    price: 'R$ 169,90',
  },
  {
    title: 'Horizon',
    description:
      'Junte-se a Aloy em sua jornada por um mundo exuberante cheio de máquinas perigosas e maravilhas misteriosas.',
    image: '/images/horizon.svg',
    discount: '-25%',
    price: 'R$ 149,99',
  },
  {
    title: 'God of War',
    description:
      'Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.',
    image: '/images/GodOfWarBanner.svg',
    discount: '-40%',
    price: 'R$ 119,95',
  },
]

const CarouselMain = () => {
  // Direcionamento
  const navigate = useNavigate()

  // Recebe o game e direciona para a página correspondente
  const GameClick = (game) => {
    navigate('/gamepage', { state: game })
  }

  return (
    <div className="carrossel-main" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Swiper
        className="main-container"
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop
        modules={[Navigation, Pagination]}
      >
        {games.map((game, index) => (
          <SwiperSlide key={index} onClick={() => GameClick(game)}>
            <div className="image-container">
              <img src={game.image} alt={game.title.toLowerCase()} />
              <div className="text">
                <div className="promo">{game.discount}</div>
                <div className="value">{game.price}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselMain
