import './CarouselReleases.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'

const CarouselReleases = () => {
  return (
    <div className="carrossel-releases" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Swiper
        className='releases-container'
        navigation={true} 
        loop={true} 
        modules={[Navigation]} 
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          780: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/bobEsponja.svg" alt="bob-esponja"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/Deliver.svg" alt="deliver"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/SpellForce.svg" alt="spellforce"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/deathStranding.svg" alt="death-stranding"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/perish.svg" alt="perish"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/bobEsponja.svg" alt="bob-esponja"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/Deliver.svg" alt="deliver"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/SpellForce.svg" alt="spellforce"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/deathStranding.svg" alt="death-stranding"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-text">
            <img src="/images/perish.svg" alt="perish"/>
            <div className="price">R$ 299,00</div>
            <button>Comprar Agora</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselReleases
