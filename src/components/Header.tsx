import React from "react";
import logo from "../assets/images/header-img/logo.svg";
import viber from "../assets/images/header-img/viber.svg";
import telegram from "../assets/images/header-img/telegram.svg";
import instagram from "../assets/images/header-img/instagram.svg";
import facebook from "../assets/images/header-img/facebook.svg";
import calc from "../assets/images/header-img/calc.svg";
import user from "../assets/images/header-img/user.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img className="header__logo-img" src={logo} alt="" />
          </div>
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
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Головна
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Питання та відповіді
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Послуги
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Блог
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Контакти
                </a>
              </li>
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
              <div className="header__face-item">
                <a className="header__face-link" href="#">
                  <img src={user} alt="" />
                </a>
              </div>
            </div>
            <a className="button header__face-btn" href="#">
              Замовити проєкт
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
