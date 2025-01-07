import './CarouselMain.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const CarouselMain = () => {
  return (
    <div className="carrossel-main" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Swiper
        className='main-container'
        spaceBetween={20} 
        slidesPerView={1} 
        navigation={true}
        pagination={{ clickable: true }} 
        loop={true} 
        modules={[Navigation, Pagination]} 
      >
        <SwiperSlide>
          <div className="image-container">
            <img src="/images/DaysGone.svg" alt="days-gone"/>
            <div className="text">
              <div className="promo">-15%</div>
              <div className="value">R$ 169,90</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="/images/horizon.svg" alt="horizon"/>
            <div className="text">
              <div className="promo">-25%</div>
              <div className="value">R$ 149,99</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="/images/godofwarpop.svg" alt="godofwarpop"/>
            <div className="text">
              <div className="promo">-40%</div>
              <div className="value">R$ 119,95</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="/images/DaysGone.svg" alt="days-gone"/>
            <div className="text">
              <div className="promo">-15%</div>
              <div className="value">R$ 169,90</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="/images/horizon.svg" alt="horizon"/>
            <div className="text">
              <div className="promo">-25%</div>
              <div className="value">R$ 149,99</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="/images/godofwarpop.svg" alt="godofwarpop"/>
            <div className="text">
              <div className="promo">-40%</div>
              <div className="value">R$ 119,95</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselMain
