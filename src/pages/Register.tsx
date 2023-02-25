import { Link } from "react-router-dom";
import { ScrollToTopOnMount } from "../helpers/routerup";

export const Register = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <section className="register">
        <div className="container">
          <div className="button top__mob-btn">Замовити проєкт</div>
          <div className="register__wrapper">
            <h1 className="main-title register__title">Реєстрація</h1>
            <div className="register__inner">
              <div className="register__box">
                <div className="register__box-title">Особисті данні</div>
                <div className="register__box-grid">
                  <div className="aside-popup__form-item register__box-item">
                    <input
                      name=""
                      type="text"
                      className="aside-popup__input"
                      id="form-surname"
                      placeholder="Прізвище"
                    ></input>
                    <label
                      className="aside-popup__label"
                      htmlFor="form-surname"
                    >
                      Прізвище<span>*</span>
                    </label>
                  </div>
                  <div className="aside-popup__form-item register__box-item">
                    <input
                      name=""
                      type="text"
                      className="aside-popup__input"
                      id="form-name"
                      placeholder="Ім'я"
                    ></input>
                    <label className="aside-popup__label" htmlFor="form-name">
                      Ім'я<span>*</span>
                    </label>
                  </div>
                  <div className="aside-popup__form-item register__box-item">
                    <input
                      name=""
                      type="text"
                      className="aside-popup__input"
                      id="form-nameth"
                      placeholder="По батькові"
                    ></input>
                    <label className="aside-popup__label" htmlFor="form-nameth">
                      По батькові
                    </label>
                  </div>
                  <div className="aside-popup__form-item register__box-item">
                    <input
                      name=""
                      type="text"
                      className="aside-popup__input"
                      id="form-phone"
                      placeholder="Моб. номер телефону"
                    ></input>
                    <label className="aside-popup__label" htmlFor="form-phone">
                      Моб. номер телефону<span>*</span>
                    </label>
                  </div>
                  <div className="aside-popup__form-item register__box-item">
                    <input
                      name=""
                      type="text"
                      className="aside-popup__input"
                      id="form-regemail"
                      placeholder="Email"
                    ></input>
                    <label
                      className="aside-popup__label"
                      htmlFor="form-regemail"
                    >
                      Email<span>*</span>
                    </label>
                  </div>
                  <div className="aside-popup__form-item register__box-item">
                    <input
                      name=""
                      type="text"
                      className="aside-popup__input"
                      id="form-reemail"
                      placeholder="Повторити Email"
                    ></input>
                    <label
                      className="aside-popup__label"
                      htmlFor="form-reemail"
                    >
                      Повторити Email<span>*</span>
                    </label>
                  </div>
                  <div className="aside-popup__form-item register__box-item">
                    <input
                      name=""
                      type="text"
                      className="aside-popup__input"
                      id="form-skype"
                      placeholder="Skype"
                    ></input>
                    <label className="aside-popup__label" htmlFor="form-skype">
                      Skype<span>*</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="register__box">
                <div className="register__box-title">Пароль</div>
                <div className="aside-popup__form-item  register__box-item register__box-item-mb  register__box-item-imp">
                  <input
                    name=""
                    type="text"
                    className="aside-popup__input"
                    id="form-pass"
                    placeholder="Пароль для входу"
                  ></input>
                  <label className="aside-popup__label" htmlFor="form-pass">
                    Пароль для входу
                  </label>
                </div>
                <div className="aside-popup__form-item register__box-item register__box-item-mt">
                  <input
                    name=""
                    type="text"
                    className="aside-popup__input"
                    id="form-repass"
                    placeholder="Підтвердіть пароль"
                  ></input>
                  <label className="aside-popup__label" htmlFor="form-repass">
                    Підтвердіть пароль
                  </label>
                </div>
                <Link className="button register__btn" to="../account">
                  Реєстрація
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
