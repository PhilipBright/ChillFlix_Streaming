import Card from "./Card";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CardSlider = ({ data, title }) => {
  return (
    <div className="w-screen h-screen bg-black" >

      
      <div className="w-64 h-15 bg-amber-400 m-4">
      <h2 className=" text-[2rem] text-center text-black font-bold font-serif">{title}</h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation
       
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id} className=" border rounded-xl">
            <Card movieData={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default CardSlider;
