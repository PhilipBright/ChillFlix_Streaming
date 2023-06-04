import Card from "./Card";

// export default function CardSlider({ data, title }) {
//   return (
//     <div className="">
//       <h2>{title}</h2><br />
//       <div className="flex">
//       {data.map((movie) => (
//         <Card key={movie.id} movieData={movie} />
//       ))}
//       </div>
      
//     </div>
//   );
// }
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
    <div className="w-screen h-screen bg-slate-900">

      
      <div className="w-64 h-15 bg-white m-4">
      <h2 className=" text-[2rem] text-center text-black font-bold font-serif">{title}</h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
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
  );
};

export default CardSlider;
