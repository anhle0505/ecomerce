import React from "react";
import Slider from "react-slick";
import slideBanner1 from "../../Assets/images/slideBanner1.jpg";
import slideBanner2 from "../../Assets/images/slideBanner2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeBanner = () => {

  return (
    <>
      <div className="container mt-3">
        <div className="homeBannerSection">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            navigation={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <img src={'https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg'} className="w-100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>          
              <div className="item">
                <img src={slideBanner2} className="w-100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img src={slideBanner1} className="w-100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img src={slideBanner2} className="w-100" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
