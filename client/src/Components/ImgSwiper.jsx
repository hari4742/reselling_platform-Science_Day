import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import '../Styles/img-swiper.css';
const ImgSwiper = (props) => {
    return (  
        <div className='img-swipper'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {props.prod_imgs?props.prod_imgs.map((img)=>{
              return <SwiperSlide><img src={'http://localhost:5000'+img.img_loc} /></SwiperSlide>
          }):<SwiperSlide>Loading...</SwiperSlide>}
        </Swiper>
      </div>
     );
}
 
export default ImgSwiper;