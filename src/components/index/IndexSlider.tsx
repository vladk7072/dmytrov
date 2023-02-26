import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import bg1 from "../../assets/images/indexslider-img/bg.jpg";
import bg2 from "../../assets/images/indexslider-img/bg2.jpg";
import bg3 from "../../assets/images/indexslider-img/bg3.jpg";
import bg4 from "../../assets/images/indexslider-img/bg4.jpg";
import hover1 from "../../assets/images/indexslider-img/hover-1.jpg";
import hover3 from "../../assets/images/indexslider-img/hover-2.jpg";
import hover2 from "../../assets/images/indexslider-img/hover-3.jpg";
import hover4 from "../../assets/images/indexslider-img/hover-4.jpg";
import hover5 from "../../assets/images/indexslider-img/hover-5.jpg";
import hover6 from "../../assets/images/indexslider-img/hover-6.jpg";

export const IndexSlide = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState<any>(null);

  const [numSlideImg, setNumSlideImg] = useState<any>(null);

  const handleAddMobImg = (imgNum: number) => {
    setNumSlideImg(dataMobImg[imgNum].img);
  };

  const dataMobImg = [
    {
      id: 0,
      img: hover1,
    },
    {
      id: 1,
      img: hover2,
    },
    {
      id: 2,
      img: hover3,
    },
    {
      id: 3,
      img: hover4,
    },
    {
      id: 4,
      img: hover5,
    },
    {
      id: 5,
      img: hover6,
    },
  ];

  return (
    <>
      <section className="indexslide">
        {numSlideImg && (
          <div className="indexslide__mob-img">
            <div className="indexslide__mob-img-box">
              <div
                className="indexslide__mob-img-close"
                onClick={() => setNumSlideImg(null)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3259 12L23.7254 1.60046C24.0916 1.23432 24.0916 0.640698 23.7254 0.274605C23.3593 -0.0914881 22.7657 -0.091535 22.3996 0.274605L12 10.6742L1.60046 0.274605C1.23432 -0.091535 0.640698 -0.091535 0.274605 0.274605C-0.0914881 0.640745 -0.091535 1.23437 0.274605 1.60046L10.6741 12L0.274605 22.3996C-0.091535 22.7657 -0.091535 23.3593 0.274605 23.7254C0.457651 23.9085 0.697604 24 0.937557 24C1.17751 24 1.41742 23.9085 1.60051 23.7254L12 13.3259L22.3995 23.7254C22.5826 23.9085 22.8225 24 23.0625 24C23.3024 24 23.5423 23.9085 23.7254 23.7254C24.0916 23.3593 24.0916 22.7657 23.7254 22.3996L13.3259 12Z"
                    fill="#353535"
                  />
                </svg>
              </div>
              <img src={numSlideImg} alt="" />
            </div>
          </div>
        )}
        <div className="container indexslide__container">
          <div className="indexslide__wrapper">
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: swiperNavPrevRef.current,
                nextEl: swiperNavNextRef.current,
              }}
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
              }}
              speed={500}
              slidesPerView={1}
              onInit={(swiper: any) => {
                swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                swiper.params.navigation.nextEl = swiperNavNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
              <SwiperSlide>
                <div className="swiper-slide indexslide__slide">
                  <div className="indexslide__slide-area">
                    <img
                      className="indexslide__slide-area-img"
                      src={bg1}
                      alt=""
                    />
                    <div className="indexslide__slide-area-box indexslide__slide-area-box-1">
                      <div className="indexslide__slide-area-item">01</div>
                      <img src={hover1} alt="" />
                    </div>
                    <div className="indexslide__slide-area-box indexslide__slide-area-box-2">
                      <div className="indexslide__slide-area-item">02</div>
                      <img src={hover2} alt="" />
                    </div>
                    <div className="indexslide__slide-area-box indexslide__slide-area-box-3">
                      <div className="indexslide__slide-area-item">03</div>
                      <img src={hover3} alt="" />
                    </div>
                    <div className="indexslide__slide-area-box indexslide__slide-area-box-4">
                      <div className="indexslide__slide-area-item">04</div>
                      <img src={hover4} alt="" />
                    </div>
                  </div>
                  <div className="indexslide__slide-box">
                    <div className="indexslide__slide-subtitle">
                      Наші переваги
                    </div>
                    <div className="indexslide__slide-title">Наші переваги</div>
                    <div className="indexslide__slide-text">
                      Детальні схематичні ілюстрації всіх необхідних технічних
                      вузлів та приміщень з додатковими поясненнями, завдяки
                      яким Будівельникам неможливо буде помилитись при виконанні
                      робіт. А ви з легкістю їх проконтролюєте
                    </div>
                    <div className="indexslide__slide-area-mob">
                      <img src={bg1} alt="" />
                      <div
                        className="indexslide__slide-area-mob-item indexslide__slide-area-mob-item-1"
                        onClick={() => handleAddMobImg(0)}
                      >
                        01
                      </div>
                      <div
                        className="indexslide__slide-area-mob-item indexslide__slide-area-mob-item-2"
                        onClick={() => handleAddMobImg(1)}
                      >
                        02
                      </div>
                      <div
                        className="indexslide__slide-area-mob-item indexslide__slide-area-mob-item-3"
                        onClick={() => handleAddMobImg(2)}
                      >
                        03
                      </div>
                      <div
                        className="indexslide__slide-area-mob-item indexslide__slide-area-mob-item-4"
                        onClick={() => handleAddMobImg(3)}
                      >
                        04
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide indexslide__slide">
                  <div className="indexslide__slide-area">
                    <img
                      className="indexslide__slide-area-img"
                      src={bg2}
                      alt=""
                    />
                    <div className="indexslide__slide-area-box indexslide__slide-area-box-5">
                      <div className="indexslide__slide-area-item">01</div>
                      <img src={hover5} alt="" />
                    </div>
                  </div>
                  <div className="indexslide__slide-box">
                    <div className="indexslide__slide-subtitle">
                      Наші переваги
                    </div>
                    <div className="indexslide__slide-title">
                      Наповнення електрощита
                    </div>
                    <div className="indexslide__slide-text">
                      Наші проєкти містять не тільки схему розміщення
                      електроточок, але й детальну схему наповнення електрощита
                      зі специфікацією обладнання. Це дозволяє точно знати, яке
                      обладнання потрібно для вашого проєкту, і гарантує, що всі
                      компоненти відповідають вашим потребам. Крім того, ми
                      також надаємо схему електричну принципову щита, яка
                      дозволяє зрозуміти, які споживачі пов'язані з кожним
                      контролером, що дозволяє вам легко знаходити та усувати
                      будь-які проблеми, що виникають. Це забезпечує безпечну та
                      надійну роботу електрощита, а також забезпечує легкий та
                      зрозумілий монтаж, а надалі обслуговування та ремонту.
                    </div>
                    <div
                      className="indexslide__slide-area-mob"
                      onClick={() => handleAddMobImg(4)}
                    >
                      <img src={bg2} alt="" />
                      <div className="indexslide__slide-area-mob-item indexslide__slide-area-mob-item-5">
                        01
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide indexslide__slide">
                  <div className="indexslide__slide-area">
                    <img
                      className="indexslide__slide-area-img"
                      src={bg3}
                      alt=""
                    />
                    <div className="indexslide__slide-area-box indexslide__slide-area-box-6">
                      <div className="indexslide__slide-area-item">01</div>
                      <img src={hover6} alt="" />
                    </div>
                  </div>
                  <div className="indexslide__slide-box">
                    <div className="indexslide__slide-subtitle">
                      Наші переваги
                    </div>
                    <div className="indexslide__slide-title">
                      Схема водорозбірного вузла
                    </div>
                    <div className="indexslide__slide-text">
                      У наших проєктах ми надаємо схему збірки водорозбірного
                      вузла. Це детальна схема, яка показує, як різні компоненти
                      водорозбірного вузла пов'язані між собою та як вони мають
                      бути зібрані. Ця схема дозволяє забезпечити правильний та
                      безпечний монтаж водорозбірного вузла. Крім того, схема
                      збірки водорозбірного вузла може бути корисною для
                      підтримки та обслуговування системи. Вона дозволяє
                      майстрам з легкістю знайти та ідентифікувати компоненти
                      системи та у випадку їх несправності провести заміну чи
                      ремонт.
                    </div>
                    <div
                      className="indexslide__slide-area-mob"
                      onClick={() => handleAddMobImg(5)}
                    >
                      <img src={bg3} alt="" />
                      <div className="indexslide__slide-area-mob-item indexslide__slide-area-mob-item-6">
                        01
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide indexslide__slide">
                  <div className="indexslide__slide-area">
                    <img
                      className="indexslide__slide-area-img"
                      src={bg4}
                      alt=""
                    />
                  </div>
                  <div className="indexslide__slide-box">
                    <div className="indexslide__slide-subtitle">
                      Наші переваги
                    </div>
                    <div className="indexslide__slide-title">
                      Онлайн анкетування текст
                    </div>
                    <div className="indexslide__slide-text">
                      Наша компанія розробила унікальну систему
                      онлайн-анкетування з безліччю переваг. Користувачі можуть
                      заповнити анкету в будь-який зручний для них час і з
                      будь-якого пристрою. Завдяки цьому наша система забезпечує
                      максимальний комфорт і зручність для наших клієнтів. Крім
                      того, система містить у собі функцію збереження
                      незавершеної анкети, що дозволяє продовжувати заповнення
                      пізніше, якщо з якихось причин необхідно вийти з системи.
                    </div>
                    <div className="indexslide__slide-area-mob">
                      <img src={bg4} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="indexslide__bar">
              <div className="indexslide__bar-count">
                <div className="indexslide__bar-count-num indexslide__bar-count-target">
                  {currentSlide >= 10
                    ? currentSlide + 1
                    : `0${currentSlide + 1}`}
                </div>
                <div className="indexslide__bar-count-num indexslide__bar-count-all">
                  /04
                </div>
              </div>
              <div className="indexslide__bar-arrows">
                <div
                  className="indexslide__bar-arrow indexslide__bar-arrow-prev"
                  ref={swiperNavPrevRef}
                >
                  <svg
                    width="38"
                    height="30"
                    viewBox="0 0 38 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.466 29.2471L16.9407 27.5789L3.96966 16.1129L38 16.1129L38 13.8863L3.96966 13.8863L16.9407 2.42033L15.466 0.752113L2.51879e-06 14.4236L2.6195e-06 15.5756L15.466 29.2471Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="indexslide__bar-arrow indexslide__bar-arrow-next"
                  ref={swiperNavNextRef}
                >
                  <svg
                    width="38"
                    height="30"
                    viewBox="0 0 38 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.534 0.75293L21.0593 2.42115L34.0303 13.8871H0V16.1137H34.0303L21.0593 27.5797L22.534 29.2479L38 15.5764V14.4244L22.534 0.75293Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
