import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../assets/images/indexslider-img/bg.jpg";

export const IndexSlide = () => {
  return (
    <section className="indexslide">
      <div className="container">
        <Swiper>
          <SwiperSlide>
            <div className="swiper-slide indexslide__slide">
              <div className="indexslide__slide-area">
                <img src={bg1} alt="" />
                <div className="indexslide__slide-area-box">
                  <div className="indexslide__slide-area-item indexslide__slide-area-item-1">01</div>
                </div>
                <div className="indexslide__slide-area-box">
                  <div className="indexslide__slide-area-item indexslide__slide-area-item-2">02</div>
                </div>
                <div className="indexslide__slide-area-box">
                  <div className="indexslide__slide-area-item indexslide__slide-area-item-3">03</div>
                </div>
                <div className="indexslide__slide-area-box">
                  <div className="indexslide__slide-area-item indexslide__slide-area-item-4">04</div>
                </div>
              </div>
              <div className="indexslide__slide-box">
                <div className="indexslide__slide-title">Наші переваги</div>
                <div className="indexslide__slide-text">
                  Детальні схематичні ілюстрації всіх необхідних технічних
                  вузлів та приміщень з додатковими поясненнями, завдяки яким
                  Будівельникам неможливо буде помилитись при виконанні робіт. А
                  ви з легкістю їх проконтролюєте
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper indexslide__slider">
          <div className="swiper-wrapper indexslide__slider"></div>
        </div>
      </div>
    </section>
  );
};
