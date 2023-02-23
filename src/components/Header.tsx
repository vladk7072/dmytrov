import React, { useState, useEffect } from "react";
import logo from "../assets/images/header-img/logo.svg";
import viber from "../assets/images/header-img/viber.svg";
import telegram from "../assets/images/header-img/telegram.svg";
import instagram from "../assets/images/header-img/instagram.svg";
import facebook from "../assets/images/header-img/facebook.svg";
import calc from "../assets/images/header-img/calc.svg";
import user from "../assets/images/header-img/user.svg";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const dataMenu = [
    {
      item: "Головна",
      link: "home",
    },
    {
      item: "Питання та відповіді",
      link: "questions",
    },
    {
      item: "Послуги",
      link: "services",
    },
    {
      item: "Блог",
      link: "blog",
    },
    {
      item: "Контакти",
      link: "contacts",
    },
  ];
  const [openAside, setOpenAside] = useState(false);

  if (openAside) {
    document.addEventListener("click", function (event) {
      var asidePopup = document.querySelector(".aside-popup");
      var clickedElement = event.target;

      if (
        // @ts-ignore
        asidePopup.contains(clickedElement) &&
        // @ts-ignore
        !clickedElement.closest(
          ".aside-popup__content, .aside-popup__form, .aside-popup__title, .aside-popup__form-item, .aside-popup__input, .aside-popup__label, .aside-popup__check-box-label, .aside-popup__check-box-input, .aside-popup__check-box-style, .aside-popup__btn, .button"
        )
      ) {
        setOpenAside(false);
      }
    });
  }
  if (!openAside) {
    document.removeEventListener("click", function (event) {
      var asidePopup = document.querySelector(".aside-popup");
      var clickedElement = event.target;

      if (
        // @ts-ignore
        asidePopup.contains(clickedElement) &&
        // @ts-ignore
        !clickedElement.closest(
          ".aside-popup__content, .aside-popup__form, .aside-popup__title, .aside-popup__form-item, .aside-popup__input, .aside-popup__label, .aside-popup__check-box-label, .aside-popup__check-box-input, .aside-popup__check-box-style, .aside-popup__btn, .button"
        )
      ) {
        setOpenAside(false);
      }
    });
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link className="header__logo" to="home">
              <img className="header__logo-img" src={logo} alt="" />
            </Link>
            <nav className="header__nav">
              <div className="header__nav-doc">
                <div className="header__socials">
                  <a className="header__socials-tel" href="tel:0992521329">
                    +38 (099) 252 13 29
                  </a>
                  <a className="header__socials-item" href="#">
                    <img src={viber} alt="" />
                  </a>
                  <a className="header__socials-item" href="#">
                    <img src={telegram} alt="" />
                  </a>
                  <a className="header__socials-item" href="#">
                    <img src={instagram} alt="" />
                  </a>
                  <a className="header__socials-item" href="#">
                    <img src={facebook} alt="" />
                  </a>
                </div>
              </div>
              <ul className="header__nav-list">
                {dataMenu.map((item, idx) => (
                  <li className="header__nav-item" key={idx}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "header__nav-link header__nav-link--active"
                          : "header__nav-link"
                      }
                      to={item.link}
                    >
                      {item.item}
                    </NavLink>
                  </li>
                ))}
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <img src={calc} alt="" />
                    Прорахувати вартість
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__face">
              <div className="header__face-bar">
                <div className="header__face-item">
                  <a className="header__face-link" href="#">
                    UA
                  </a>
                </div>
                <div
                  className="header__face-item"
                  onClick={() => setOpenAside(true)}
                >
                  <a className="header__face-link" href="#">
                    <img src={user} alt="" />
                  </a>
                </div>
              </div>
              <Link className="button header__face-btn" to="create">
                Замовити проєкт
              </Link>
            </div>
          </div>
        </div>
      </header>

      {openAside && (
        <div className="aside-popup">
          <div className="aside-popup__content">
            <div
              className="aside-popup__close"
              onClick={() => setOpenAside(false)}
            >
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_116_3458)">
                  <path
                    d="M28.8728 26.0001L51.4051 3.46767C52.1984 2.67436 52.1984 1.38818 51.4051 0.594977C50.6118 -0.198224 49.3256 -0.198326 48.5324 0.594977L26 23.1274L3.46767 0.594977C2.67436 -0.198326 1.38818 -0.198326 0.594977 0.594977C-0.198224 1.38828 -0.198326 2.67447 0.594977 3.46767L23.1273 26L0.594977 48.5324C-0.198326 49.3257 -0.198326 50.6119 0.594977 51.4051C0.991578 51.8017 1.51148 51.9999 2.03137 51.9999C2.55127 51.9999 3.07107 51.8017 3.46777 51.4051L26 28.8728L48.5323 51.4051C48.9289 51.8017 49.4488 51.9999 49.9687 51.9999C50.4886 51.9999 51.0084 51.8017 51.4051 51.4051C52.1984 50.6118 52.1984 49.3256 51.4051 48.5324L28.8728 26.0001Z"
                    fill="#353535"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_116_3458">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="aside-popup__form">
              <div className="aside-popup__title">Вхід в особистий кабінет</div>
              <div className="aside-popup__form-item">
                <input
                  name=""
                  className="aside-popup__input"
                  id="form-loin"
                  placeholder="Логiн"
                ></input>
                <label className="aside-popup__label" htmlFor="form-loin">
                  Логiн
                </label>
              </div>
              <div className="aside-popup__form-item">
                <input
                  name=""
                  className="aside-popup__input"
                  id="form-password"
                  placeholder="Пароль"
                ></input>
                <label className="aside-popup__label" htmlFor="form-password">
                  Пароль
                </label>
              </div>
              <div className="aside-popup__links">
                <Link
                  className="aside-popup__link"
                  to="register"
                  onClick={() => setOpenAside(false)}
                >
                  Ще не маєте облікового запису?
                </Link>
                <Link
                  className="aside-popup__link"
                  to="login"
                  onClick={() => setOpenAside(false)}
                >
                  Забули пароль?
                </Link>
              </div>
              <label className="aside-popup__check-box-label aside-popup__check-box-label-account">
                <input
                  className="aside-popup__check-box-input"
                  type="checkbox"
                />
                <span className="aside-popup__check-box-style"></span>
                Запам’ятати мене
              </label>
              <div
                className="aside-popup__btn button"
                onClick={() => setOpenAside(false)}
              >
                Прорахувати оптимальну вартість
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
