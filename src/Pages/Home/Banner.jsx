
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
       
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper app"
      >
        <SwiperSlide>
        <img src="https://i.ibb.co/Fqvmmgz/young-woman-model-blue-winter-jacket.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/DYwCYgj/close-up-woman-legs-wearing-black-leather-boots-jeans-footwear-spring-trends-holding-bag.jpg" alt=""/> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/SV6Q2BX/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho.jpg" alt=""/> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/7SsL50m/retro-man-dressed-shirt-lies-floor-posing.jpg" alt=""/> </SwiperSlide>
     
      </Swiper>
        </div>
    );
};

export default Banner;