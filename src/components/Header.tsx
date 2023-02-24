import React, { useState, useEffect } from "react";
import logo from "../assets/images/header-img/logo.svg";
import viber from "../assets/images/header-img/viber.svg";
import telegram from "../assets/images/header-img/telegram.svg";
import instagram from "../assets/images/header-img/instagram.svg";
import facebook from "../assets/images/header-img/facebook.svg";
import calc from "../assets/images/header-img/calc.svg";
import user from "../assets/images/header-img/user.svg";
import { Link, NavLink } from "react-router-dom";
import { dataMenu } from "../data/header";

export const Header = () => {
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

  const [openMenu, setOpenMenu] = useState(false);

  const handleMobMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link className="header__logo" to="home">
              <img className="header__logo-img" src={logo} alt="" />
            </Link>
            <nav
              className={
                openMenu ? "header__nav header__nav--active" : "header__nav"
              }
              onClick={() => setOpenMenu(false)}
            >
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
                  <a
                    className="header__nav-link header__nav-link--accent"
                    href="#"
                  >
                    <img src={calc} alt="" />
                    Прорахувати вартість
                  </a>
                </li>
                <a className="button header__nav-btn-mob" href="#">
                  Замовити проєкт
                </a>
              </ul>
            </nav>
            <div className="header__face">
              <div className="header__face-bar">
                <div className="header__face-item header__face-item-mob">
                  <a className="header__face-link" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 0.625H3.75C2.02688 0.625 0.625 2.02688 0.625 3.75V16.25C0.625 17.9731 2.02688 19.375 3.75 19.375H16.25C17.9731 19.375 19.375 17.9731 19.375 16.25V3.75C19.375 2.02688 17.9731 0.625 16.25 0.625ZM18.125 3.75V9.375H10.625V1.875H16.25C17.2838 1.875 18.125 2.71625 18.125 3.75ZM3.75 1.875H9.375V9.375H1.875V3.75C1.875 2.71625 2.71625 1.875 3.75 1.875ZM1.875 16.25V10.625H9.375V18.125H3.75C2.71625 18.125 1.875 17.2838 1.875 16.25ZM16.25 18.125H10.625V10.625H18.125V16.25C18.125 17.2838 17.2838 18.125 16.25 18.125Z"
                        fill="#E55733"
                      />
                      <path
                        d="M3.75 6.25H5V7.5C5 7.845 5.27938 8.125 5.625 8.125C5.97062 8.125 6.25 7.845 6.25 7.5V6.25H7.5C7.84562 6.25 8.125 5.97 8.125 5.625C8.125 5.28 7.84562 5 7.5 5H6.25V3.75C6.25 3.405 5.97062 3.125 5.625 3.125C5.27938 3.125 5 3.405 5 3.75V5H3.75C3.40438 5 3.125 5.28 3.125 5.625C3.125 5.97 3.40438 6.25 3.75 6.25Z"
                        fill="#E55733"
                      />
                      <path
                        d="M12.5 6.25H16.25C16.5956 6.25 16.875 5.97 16.875 5.625C16.875 5.28 16.5956 5 16.25 5H12.5C12.1544 5 11.875 5.28 11.875 5.625C11.875 5.97 12.1544 6.25 12.5 6.25Z"
                        fill="#E55733"
                      />
                      <path
                        d="M16.25 15H12.5C12.1544 15 11.875 15.28 11.875 15.625C11.875 15.97 12.1544 16.25 12.5 16.25H16.25C16.5956 16.25 16.875 15.97 16.875 15.625C16.875 15.28 16.5956 15 16.25 15Z"
                        fill="#E55733"
                      />
                      <path
                        d="M16.25 12.5H12.5C12.1544 12.5 11.875 12.78 11.875 13.125C11.875 13.47 12.1544 13.75 12.5 13.75H16.25C16.5956 13.75 16.875 13.47 16.875 13.125C16.875 12.78 16.5956 12.5 16.25 12.5Z"
                        fill="#E55733"
                      />
                      <path
                        d="M6.51031 14.3751L7.39406 13.4913C7.63844 13.247 7.63844 12.852 7.39406 12.6076C7.14969 12.3632 6.75469 12.3632 6.51031 12.6076L5.62656 13.4913L4.74281 12.6076C4.49844 12.3632 4.10344 12.3632 3.85906 12.6076C3.61469 12.852 3.61469 13.247 3.85906 13.4913L4.74281 14.3751L3.85906 15.2595C3.61469 15.5038 3.61469 15.8988 3.85906 16.1432C3.98094 16.2651 4.14094 16.3263 4.30094 16.3263C4.46094 16.3263 4.62094 16.2651 4.74281 16.1432L5.62656 15.2595L6.51031 16.1432C6.63219 16.2651 6.79219 16.3263 6.95219 16.3263C7.11219 16.3263 7.27219 16.2651 7.39406 16.1432C7.63844 15.8988 7.63844 15.5038 7.39406 15.2595L6.51031 14.3751Z"
                        fill="#E55733"
                      />
                    </svg>
                  </a>
                </div>
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
                <div
                  className="header__face-item header__face-item-black header__face-item-mob"
                  onClick={() => handleMobMenu()}
                >
                  <div
                    className={
                      openMenu
                        ? "header__face-item-mob-menu header__face-item-mob-menu--active"
                        : "header__face-item-mob-menu"
                    }
                  >
                    <span></span>
                  </div>
                </div>
              </div>
              <Link className="button header__face-btn" to="create">
                Замовити проєкт
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <div className={openAside ? "aside-popup aside-popup--active" : "aside-popup"}>
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
              <input className="aside-popup__check-box-input" type="checkbox" />
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
    </>
  );
};
