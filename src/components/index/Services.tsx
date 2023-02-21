import { useState } from "react";
import Slider from "rsuite/Slider";
import "rsuite/dist/rsuite.css";

export const Services = () => {
  const dataRates = [
    {
      id: 0,
      title: "Базовий",
      text: "Технічний проєкт",
    },
    {
      id: 1,
      title: "Стандарт",
      text: "Технічний проєкт",
    },
    {
      id: 2,
      title: "Премiум",
      text: "Технічний+Дизайн проєкт",
    },
  ];

  const [activeItem, setActiveItem] = useState(1);

  return (
    <section className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="services__title-box">
            <h3 className="services__title">Переглянути всi послуги</h3>
            <div className="services__title-img">
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.44 0.00585938L44.3355 3.51789L71.6428 27.6568H0V32.3443H71.6428L44.3355 56.4832L47.44 59.9952L80 31.2132V28.7879L47.44 0.00585938Z"
                  fill="#353535"
                />
              </svg>
            </div>
            <div className="services__title-btn button">Переглянути</div>
          </div>
          <div className="services__inner">
            <div className="services__boxtext">
              <h4 className="services__box-title">Прорахунок вартості</h4>
              <div className="services__box-text">
                Ця форма призначена для прорахунку орієнтовної вартості проєкту.
                Якщо Вас не влаштовує вартість або ж ви бажаєте прорахувати
                індивідуальну вартість проєкту під ваші потреби, ви можете
                заповнити заявку "не влаштовує вартість" і наш менеджер з вами
                зв'яжеться.
              </div>
            </div>
            <div className="services__box">
              <div className="services__range-title">Вибір площі: </div>
              <div className="services__range-slider">
                <div className="services__range-slider-title">5</div>
                <Slider
                  progress
                  min={5}
                  max={175}
                  defaultValue={75}
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
                <div className="services__range-slider-title">175+ м2</div>
              </div>
              <div className="services__range-title">Вибір тарифа проєкту:</div>
              <div className="services__range-items">
                {dataRates.map((item, idx) => (
                  <div
                    className={
                      activeItem === idx
                        ? "services__range-item services__range-item--active"
                        : "services__range-item"
                    }
                    key={idx}
                    onClick={() => setActiveItem(idx)}
                  >
                    <div className="services__range-item-title">
                      {item.title}
                    </div>
                    <div className="services__range-item-text">{item.text}</div>
                  </div>
                ))}
              </div>
              <div className="services__priceproject">
                <div className="services__priceproject-box">
                  <div className="services__priceproject-subtitle">
                    Вартість проєкту:
                  </div>
                  <div className="services__priceproject-title">
                    37 500
                    <span>грн</span>
                  </div>
                </div>
                <div className="services__priceproject-btns">
                  <div className="services__priceproject-btn button">
                    Замовити проєкт
                  </div>
                  <div className="services__priceproject-btn-link">
                    Не влаштовує вартість?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
