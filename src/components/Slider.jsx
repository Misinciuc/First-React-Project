import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../styles/Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderItems } from "../../src/data";

const Slider = () => {
  return (
    <div>
      {
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sliderItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="slide_img_container">
                  <img src={item.img1} alt="slide_shoe" />
                </div>
                <div className="slide_info">
                  <h2 className="slide_title">{item.title}</h2>
                  <p className="slide_description">{item.desc}</p>
                </div>
                <div className="slide_img_container">
                  <img src={item.img2} alt="slide_shoe" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
    </div>
  );
};

export default Slider;
