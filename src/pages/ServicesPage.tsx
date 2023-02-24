import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import bg1 from "../assets/images/services-img/top-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { ScrollToTopOnMount } from "../helpers/routerup";
import { dataSevicesSlide } from "../data/servicespage";

export const ServicesPage = () => {
  const dataNav = [
    {
      title: "Тариф “Базовий”",
      link: "basic",
    },
    {
      title: "Тариф “Стандарт”",
      link: "standart",
    },
    {
      title: "Тариф “Премiум”",
      link: "premium",
    },
  ];
  const dataTarifAbout = [
    {
      id: 0,
      title: "Тариф “Базовий”",
    },
    {
      id: 1,
      title: "Тариф “Стандарт”",
    },
    {
      id: 2,
      title: "Тариф “Преміум”",
    },
  ];

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);

  const allSlidesMetrica = dataSevicesSlide.length;
  var allSlides;
  if (allSlidesMetrica >= 10) {
    allSlides = allSlidesMetrica;
  } else {
    allSlides = `0${allSlidesMetrica}`;
  }

  const [activeTarif, setActiveTarif] = useState(1);

  return (
    <>
      <ScrollToTopOnMount />
      <section className="servicespage">
        <div className="container">
          <div className="servicespage__wrapper">
            <div className="servicespage__nav">
              {dataNav.map((item, idx) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "servicespage__nav-link servicespage__nav-link--active"
                      : "servicespage__nav-link"
                  }
                  to={item.link}
                  key={idx}
                  onClick={() => setActiveTarif(idx)}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="servicespage__content">
            <div className="servicespage__top">
              <h1 className="servicespage__top-title">
                {dataTarifAbout[activeTarif].title}
              </h1>
              <div className="servicespage__top-box">
                <div className="servicespage__top-subtitle">
                  Технічний проєкт
                </div>
                <div className="servicespage__top-price">
                  500
                  <span>грн/м2</span>
                </div>
                <a className="servicespage__top-btn button" href="#">
                  Замовити проєкт
                </a>
              </div>
              <p className="servicespage__top-text">
                Якщо ви не маєте бажання розбиратись в будівельних тонкощах, але
                хочете самостійно вибирати колір шпалер чи модель ліжка — тоді
                цей тариф це ваш варіант. Підійде для будь-яких об'єктів
                оскільки має в собі всі необхідні креслення та схеми для
                правильного ремонту.
              </p>
            </div>
          </div>
        </div>
        <div className="servicespage__bg">
          <img src={bg1} alt="" />
        </div>
        <div className="servicespage__slider">
          <div className="container servicespage__slider-container">
            <div className="servicespage__slider-inner">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: swiperNavPrevRef.current,
                  nextEl: swiperNavNextRef.current,
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
                {dataSevicesSlide.map((item) => (
                  <SwiperSlide>
                    <div className="servicespage__slide">
                      <div className="servicespage__slide-content">
                        <h4 className="servicespage__slide-title">
                          {item.title}
                        </h4>
                        <p className="servicespage__slide-text">{item.text}</p>
                      </div>
                      <div className="servicespage__slide-img">
                        <img src={item.bg} alt="" />
                        <div className="servicespage__slide-aside">
                          <div className="servicespage__slide-aside-title">
                            {item.address}
                          </div>
                          <div className="servicespage__slide-aside-title">
                            {item.contactdataorders}
                          </div>
                          <div className="servicespage__slide-aside-title servicespage__slide-aside-title--down">
                            {item.contactdatausers}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="container servicespage__slider-container servicespage__slider-bar">
          <div className="servicespage__slider-nav">
            <div className="servicespage__coun">
              <div className="servicespage__coun-target">
                {currentSlide >= 10 ? currentSlide + 1 : `0${currentSlide + 1}`}
              </div>
              <div className="servicespage__coun-all">/{allSlides}</div>
            </div>
            <div className="servicespage__arrows">
              <div
                className="servicespage__arrow servicespage__arrow-prev"
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
                    fill="#353535"
                  />
                </svg>
              </div>
              <div
                className="servicespage__arrow servicespage__arrow-next"
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
                    fill="#353535"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="compose">
        <div className="container">
          <div className="compose__wrapper">
            <h3 className="compose__title">Порiвняння тарифiв</h3>
            <div className="compose__top">
              <div className="compose__top-title">Назва тарифу/ послуги</div>
              <div className="compose__top-title">Базовий</div>
              <div className="compose__top-title">Стандарт</div>
              <div className="compose__top-title">Преміум</div>
            </div>
            <div className="compose__content">
              <div className="compose__content-items">
                <div className="compose__content-item">
                  Обмірне креслення з прив’язкою до iнженерних комунiкацiй
                </div>
                <div className="compose__content-item">
                  Варiанти планувальних рiшень (1-3 варiанти)
                </div>
                <div className="compose__content-item">
                  План пiдлоги зi стяжкою та звукоiзоляцiєю
                </div>
                <div className="compose__content-item">
                  Схема водопостачаня та колекторних вузлів
                </div>
                <div className="compose__content-item">
                  Схема наповнення електрощита зі специфікацією обладнання та
                  схема його підключення
                </div>
                <div className="compose__content-item">
                  План пiдлоги зi стяжкою та звукоiзоляцiєю
                </div>
                <div className="compose__content-item">
                  Схема водопостачаня та колекторних вузлів
                </div>
                <div className="compose__content-item">
                  Схема наповнення електрощита зі специфікацією обладнання та
                  схема його підключення
                </div>
              </div>
              <div className="compose__content-checks">
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
              </div>
              <div className="compose__content-checks">
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
              </div>
              <div className="compose__content-checks">
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.27321 2.74809C7.94729e-08 4.50053 0 7.00036 0 12C0 16.9996 7.94729e-08 19.4995 1.27321 21.2519C1.68441 21.8179 2.18213 22.3156 2.74809 22.7268C4.50053 24 7.00036 24 12 24C16.9996 24 19.4995 24 21.2519 22.7268C21.8179 22.3156 22.3156 21.8179 22.7268 21.2519C24 19.4995 24 16.9996 24 12C24 7.00036 24 4.50053 22.7268 2.74809C22.3156 2.18213 21.8179 1.68441 21.2519 1.27321C19.4995 7.94729e-08 16.9996 0 12 0C7.00036 0 4.50053 7.94729e-08 2.74809 1.27321C2.18213 1.68441 1.68441 2.18213 1.27321 2.74809ZM19.4117 8.66703C19.7801 8.25556 19.7452 7.62336 19.3337 7.25497C18.9223 6.88657 18.29 6.92151 17.9216 7.33297L13.4295 12.3505C12.5192 13.3672 11.9061 14.0484 11.382 14.4889C10.8828 14.9085 10.5895 15 10.3333 15C10.0772 15 9.78387 14.9085 9.28464 14.4889C8.76053 14.0484 8.14752 13.3672 7.23725 12.3505L6.07836 11.0561C5.70997 10.6447 5.07777 10.6097 4.66631 10.9781C4.25484 11.3465 4.21991 11.9787 4.58831 12.3901L5.79671 13.7399C6.64449 14.6869 7.35165 15.4768 7.9978 16.0199C8.68132 16.5944 9.41853 17 10.3333 17C11.2481 17 11.9853 16.5944 12.6688 16.0199C13.3151 15.4768 14.0221 14.6869 14.87 13.7399L19.4117 8.66703Z"
                      fill="#E55733"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
                    />
                  </svg>
                </div>
                <div className="compose__content-check">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#DDDDDD"
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
