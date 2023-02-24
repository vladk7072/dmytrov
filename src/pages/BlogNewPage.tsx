import img1 from "../assets/images/blognew-img/1.jpg";
import img2 from "../assets/images/blognew-img/2.jpg";
import img3 from "../assets/images/blognew-img/3.jpg";
import img4 from "../assets/images/blognew-img/4.jpg";
import img5 from "../assets/images/blognew-img/5.jpg";
import { dataAside, dataAsidePouns, dataFooter, dataList } from "../data/blog";
import { ScrollToTopOnMount } from "../helpers/routerup";

export const BlogNewPage = () => {
  return (
    <>
      <ScrollToTopOnMount />

      <section className="blognew">
        <div className="container">
          <div className="button top__mob-btn">Замовити проєкт</div>
          <div className="blognew__wrapper">
            <div className="blognew__content">
              <h1 className="blognew__title">
                Дизайн кухні – варіанти планування й оформлення інтер’єру
              </h1>
              <div className="blognew__data">16.02.2023</div>
              <img
                className="blognew__img blognew__img-first"
                src={img1}
                alt=""
              />
              <div className="blognew__med-title blognew__med-title-mob">
                Змiст
                <svg
                  width="23"
                  height="29"
                  viewBox="0 0 23 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3711 17.197L21.098 16.0716L12.3476 25.9705L12.3476 -4.3814e-07L10.6484 -5.12415e-07L10.6484 25.9705L1.89806 16.0716L0.624944 17.197L11.0584 29L11.9376 29L22.3711 17.197Z"
                    fill="#353535"
                  />
                </svg>
              </div>
              <p className="blognew__text">
                Кухня – це місце, де ми щодня збираємося всією сім’єю за
                спільними трапезами. Крім того, саме тут твориться справжня
                магія – приготування улюблених страв на сніданок, обід і вечерю.
                Тому інтер’єр кухні повинен бути продуманий до дрібниць і
                відповідати на два головних запити: відчуття затишку і
                практичність.
              </p>
              <p className="blognew__text">
                Сьогодні ми розповімо про те, на що звертати увагу, плануючи
                дизайн кухні, які відтінки і матеріали найкраще підходять для
                цієї кімнати і як облаштувати простір так, щоб зробити кухню
                серцем вашого будинку.
              </p>
              <h2 className="blognew__med-title">Варіанти планування кухні</h2>
              <h4 className="blognew__small-title">Пряма кухня</h4>
              <p className="blognew__text">
                Пряме планування кухні підходить для витягнутої просторої
                кімнати. При такому способі розташування меблів весь кухонний
                гарнітур встановлюється уздовж однієї найдовшої стіни, що
                повністю звільняє іншу частину кімнати для місця під обідній
                стіл.
              </p>
              <p className="blognew__text">
                Важливий мінус: якщо кімната недостатньо витягнута, помітно
                скорочується розмір робочого місця.
              </p>
              <img
                className="blognew__img blognew__img-second"
                src={img2}
                alt=""
              />
              <div className="blognew__box">
                <div className="blognew__box-text">
                  <h4 className="blognew__small-title">Кутова кухня</h4>
                  <p className="blognew__text">
                    Кутовий або по-іншому Г-подібний тип планування підходить
                    для квадратної кухні і актуальний як для маленьких, так і
                    для просторих кімнат. Принцип планування тут зрозумілий з
                    назви: кухонний гарнітур розташовується уздовж однієї з
                    найширших стін і однієї з найбільш вузьких (наприклад, біля
                    вікна).
                  </p>
                </div>
                <img src={img3} alt="" />
              </div>
              <div className="blognew__box blognew__box-sec">
                <img src={img4} alt="" />
                <div className="blognew__box-text">
                  <h4 className="blognew__small-title">
                    Кухня з барною стійкою
                  </h4>
                  <p className="blognew__text">
                    Якщо в квартирі проживає 1-2 людини, які не часто приймають
                    гостей, великий обідній стіл ні до чого. Ідеальне рішення в
                    такому випадку – сучасні кухні з барною стійкою.
                  </p>
                </div>
              </div>
              <h2 className="blognew__med-title">Колірна гамма для кухні</h2>
              <p className="blognew__text">
                Що ж, тепер давайте поговоримо про відтінки, які найчастіше
                використовуються при оформленні кухні. Вибирайте колір
                оздоблення, який викликає у вас відчуття комфорту. По суті, для
                кухні підходять практично будь-які забарвлення, головне –
                правильно їх поєднувати і не переборщити з колірною палітрою.
              </p>
              <div className="blognew__advice">
                <p className="blognew__advice-text">
                  <span className="blognew__advice-text--accent">Порада.</span>{" "}
                  Не варто робити кімнату в одному відтінку, навіть якщо ви
                  продумуєте
                  <a className="blognew__advice-text--link" href="#">
                    дизайн маленької кухні
                  </a>
                  . Рекомендуємо підібрати 2-3 кольори, які б гармонійно
                  поєднувалися між собою. Для цього можна використовувати
                  колірне коло Іттена.
                </p>
              </div>
              <img
                className="blognew__img blognew__img-therd"
                src={img5}
                alt=""
              />
              <h4 className="blognew__small-title">
                Кухня в скандинавському стилі
              </h4>
              <p className="blognew__text">
                Скандинавський стиль ось вже кілька років залишається одним з
                найпопулярніших дизайнів кухні в будинку чи квартирі. Серед його
                особливостей:
              </p>
              <ul className="blognew__list">
                {dataList.map((item, idx) => (
                  <li className="blognew__list-item" key={idx}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="13"
                        height="13"
                        rx="3.5"
                        stroke="#E55733"
                      />
                    </svg>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="blognew__aside">
              <div className="blognew__aside-col">
                <div className="blognew__aside-title">Змiст</div>
                <div className="blognew__aside-list">
                  {dataAside.map((item, idx) => (
                    <div className="blognew__aside-link" key={idx}>
                      {item.link}
                    </div>
                  ))}
                </div>
                <div className="blognew__footer blognew__footer-mob">
                  <div className="blognew__footer-text">Подiлитись:</div>
                  <div className="blognew__footer-items">
                    {dataFooter.map((item, idx) => (
                      <a className="blognew__footer-item" href="#" key={idx}>
                        {item.svg}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="blognew__aside-title blognew__aside-title-mt">
                  Популярнi статтi
                </div>
                <div className="blognew__pouns">
                  {dataAsidePouns.map((item, idx) => (
                    <div className="blognew__poun" key={idx}>
                      <img
                        className="blognew__poun-img"
                        src={item.img}
                        alt=""
                      />
                      <div className="blognew__poun-box">
                        <p className="blognew__poun-data">{item.data}</p>
                        <h6 className="blognew__poun-title">{item.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="blognew__footer">
            <div className="blognew__footer-text">Подiлитись:</div>
            <div className="blognew__footer-items">
              {dataFooter.map((item, idx) => (
                <a className="blognew__footer-item" href="#" key={idx}>
                  {item.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
