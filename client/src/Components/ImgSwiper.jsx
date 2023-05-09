import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import "../Styles/img-swiper.css";
import noProdImg from "../Images/no-prod-img.jpg";
import backendURL from "../backendURL";
const ImgSwiper = (props) => {
  return (
    <div className="img-swipper">
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
        {props.prod_imgs[0] ? (
          props.prod_imgs.map((img, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={backendURL + img.img_loc} alt="products" />
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide>
            <img src={noProdImg} alt="no product" />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default ImgSwiper;
