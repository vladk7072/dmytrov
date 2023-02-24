import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/account-img/logo.jpg";

export const MyAccountPage = () => {
  useEffect(() => {
    var eventCalllback = function (e: any) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+38(___) ___--",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");

      if (clearVal !== "false" && e.type === "blur") {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = "";
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a: any) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });
    };
    var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
    for (let elem of phone_inputs) {
      for (let ev of ["input", "blur", "focus"]) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  }, []);

  const [value, setValue] = useState(50);

  const [name, setName] = useState("Iванна");
  const [suname, setSuName] = useState("Коваленко");
  const [thname, setThName] = useState("Федорiвна");
  const [phone, setPhone] = useState("(050) 123-45-67");
  const [email, setEmail] = useState("test-email@gmail.com");
  const [skype, setSkype] = useState("");

  const [editMode, setEditMode] = useState(false);

  return (
    <section className="account">
      <div className="container">
        <div className="account__wrapper">
          <div className="account__box-image">
            <div className="account__title-box">
              <div className="account__logo">
                <img src={logo} alt="" />
              </div>
              <div className="account__name">Коваленко Iванна</div>
            </div>
            <div className="account__subtitle">Заявки</div>
            <div className="account__item">
              <div className="account__item-subtitle">Заявка</div>
              <div className="account__item-title">Дегтярівська 21</div>
              <div className="account__item-inner">
                <div className="account__item-box">
                  <div className="account__item-box-top">
                    <div className="account__item-box-title">Заповнено</div>
                    <div className="account__item-box-num">{value}%</div>
                  </div>
                  <div className="account__item-box-line">
                    <span style={{ width: `${value}%` }}></span>
                  </div>
                </div>
                <div className="account__item-box">
                  <Link
                    className="button account__item-box-btn"
                    to="/worksheet"
                  >
                    Заповнити анкету
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="account__box-data">
            <div className="account__data-top">
              <div className="account__data-title">Особисті данні</div>
              <div
                className="account__data-edit"
                onClick={() => setEditMode(true)}
              >
                Редагувати
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5642 1.70348L12.2956 0.434734C11.7159 -0.144925 10.7728 -0.144898 10.1932 0.434734C9.6474 0.980542 1.31151 9.31706 0.754438 9.87416C0.695102 9.9335 0.655344 10.0124 0.64118 10.0895L0.00686094 13.5151C-0.017721 13.6479 0.024607 13.7843 0.120119 13.8798C0.215739 13.9755 0.352185 14.0177 0.484829 13.9931L3.91015 13.3587C3.98931 13.344 4.06713 13.3038 4.12548 13.2454L13.5642 3.80602C14.1452 3.22502 14.1453 2.28456 13.5642 1.70348ZM0.922055 13.0778L1.30577 11.0056L2.99413 12.6941L0.922055 13.0778ZM3.83547 12.3753L1.62449 10.1642L9.69662 2.09146L11.9076 4.30261L3.83547 12.3753ZM12.9842 3.22598L12.4876 3.72257L10.2766 1.51142L10.7732 1.01483C11.033 0.755011 11.4557 0.754983 11.7155 1.01483L12.9842 2.28358C13.2446 2.54403 13.2446 2.9655 12.9842 3.22598Z"
                    fill="#E55733"
                  />
                </svg>
              </div>
            </div>
            <div className="aside-popup__form-item">
              <input
                name=""
                type="text"
                className="aside-popup__input"
                id="form-suname"
                placeholder="Прізвище"
                value={suname}
                onChange={(e) => setSuName(e.currentTarget.value)}
                disabled={!editMode}
              ></input>
              <label className="aside-popup__label" htmlFor="form-suname">
                Прізвище
              </label>
            </div>
            <div className="aside-popup__form-item">
              <input
                name=""
                type="text"
                className="aside-popup__input"
                id="form-yname"
                placeholder="Ваше iм’я"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                disabled={!editMode}
              ></input>
              <label className="aside-popup__label" htmlFor="form-yname">
                Ваше iм’я
              </label>
            </div>
            <div className="aside-popup__form-item">
              <input
                name=""
                type="text"
                className="aside-popup__input"
                id="form-thname"
                placeholder="По батькові"
                value={thname}
                onChange={(e) => setThName(e.currentTarget.value)}
                disabled={!editMode}
              ></input>
              <label className="aside-popup__label" htmlFor="form-thname">
                По батькові
              </label>
            </div>
            <div className="aside-popup__form-item">
              <input
                name=""
                className="aside-popup__input"
                id="form-phon"
                placeholder="Моб. номер тел"
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
                disabled={!editMode}
              ></input>
              <label className="aside-popup__label" htmlFor="form-phon">
                Моб. номер тел
              </label>
            </div>
            <div className="aside-popup__form-item">
              <input
                name=""
                className="aside-popup__input"
                id="form-mail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                disabled={!editMode}
              ></input>
              <label className="aside-popup__label" htmlFor="form-mail">
                Email
              </label>
            </div>
            <div className="aside-popup__form-item">
              <input
                name=""
                className="aside-popup__input"
                id="form-skype"
                placeholder="Skype"
                value={skype}
                onChange={(e) => setSkype(e.currentTarget.value)}
                disabled={!editMode}
              ></input>
              <label className="aside-popup__label" htmlFor="form-skype">
                Skype
              </label>
            </div>
            <div
              className="account__data-btn"
              onClick={() => setEditMode(false)}
            >
              <svg
                width="17"
                height="22"
                viewBox="0 0 17 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50046 0.17627C5.11811 0.17627 2.41222 2.88215 2.41222 6.2645V8.97039C1.26222 8.97039 0.382812 9.8498 0.382812 10.9998V19.7939C0.382812 20.9439 1.26222 21.8233 2.41222 21.8233H14.5887C15.7387 21.8233 16.6181 20.9439 16.6181 19.7939V10.9998C16.6181 9.8498 15.7387 8.97039 14.5887 8.97039V6.2645C14.5887 2.88215 11.8828 0.17627 8.50046 0.17627ZM15.2652 10.9998V19.7939C15.2652 20.1998 14.9946 20.4704 14.5887 20.4704H2.41222C2.00634 20.4704 1.73575 20.1998 1.73575 19.7939V10.9998C1.73575 10.5939 2.00634 10.3233 2.41222 10.3233H3.08869H13.9122H14.5887C14.9946 10.3233 15.2652 10.5939 15.2652 10.9998ZM3.76517 8.97039V6.2645C3.76517 3.62627 5.86222 1.52921 8.50046 1.52921C11.1387 1.52921 13.2358 3.62627 13.2358 6.2645V8.97039H3.76517Z"
                  fill="#353535"
                />
                <path
                  d="M8.50207 12.3525C7.35207 12.3525 6.47266 13.232 6.47266 14.382C6.47266 15.2614 7.01383 16.0055 7.8256 16.2761V17.7643C7.8256 18.1702 8.09619 18.4408 8.50207 18.4408C8.90795 18.4408 9.17854 18.1702 9.17854 17.7643V16.2761C9.9903 16.0055 10.5315 15.2614 10.5315 14.382C10.5315 13.232 9.65207 12.3525 8.50207 12.3525ZM8.50207 15.0584C8.09619 15.0584 7.8256 14.7878 7.8256 14.382C7.8256 13.9761 8.09619 13.7055 8.50207 13.7055C8.90795 13.7055 9.17854 13.9761 9.17854 14.382C9.17854 14.7878 8.90795 15.0584 8.50207 15.0584Z"
                  fill="#353535"
                />
              </svg>
              Змiнити пароль
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
