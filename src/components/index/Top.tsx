import React from "react";
import descLink from "../../assets/images/top-image/desc-link.jpg";
import bg from "../../assets/images/top-image/bg.jpg";
import bgContainer from "../../assets/images/top-image/bg-container.jpg";

export const Top = () => {
  return (
    <section className="top">
      <div className="container">
        <div className="top__wrapper">
          <div className="top__box">
            <h1 className="top__title">
              Розробка технiчного та дизайн-проєкту
            </h1>
            <h3 className="top__text">
              Наш проєкт - це комплексна розробка з більше ніж 20 кресленнями та
              візуалізаціями, яка враховує ваші уподобання та побажання щодо
              дизайну та функціональності приміщення, а також особливості
              конкретного об'єкта. Ми розробляємо проєкт з урахуванням вашого
              бюджету та намагаємося знайти оптимальні рішення, які задовольнять
              всі ваші потреби. Наші візуалізації допоможуть вам зрозуміти, як
              буде виглядати кінцевий результат та уникнути непорозуміння. Наш
              підхід дозволяє зробити грамотний ремонт та уникнути необдуманих
              витрат.
            </h3>
          </div>
          <div className="top__box-link">
            <img src={descLink} alt="" />
            <a className="top__link" href="#">
              Подивитися приклад завершеного дизайн-проєкту
            </a>
          </div>
        </div>
        <div className="top__image">
          <img src={bg} alt="" />
        </div>
      </div>
      <div className="top__image">
        <img src={bgContainer} alt="" />
      </div>
    </section>
  );
};
