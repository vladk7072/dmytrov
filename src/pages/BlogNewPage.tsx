import img1 from "../assets/images/blognew-img/1.jpg";
import img2 from "../assets/images/blognew-img/2.jpg";
import img3 from "../assets/images/blognew-img/3.jpg";
import img4 from "../assets/images/blognew-img/4.jpg";
import img5 from "../assets/images/blognew-img/5.jpg";

import pimg1 from "../assets/images/blognew-img/poun-1.jpg";
import pimg2 from "../assets/images/blognew-img/poun-2.jpg";
import pimg3 from "../assets/images/blognew-img/poun-3.jpg";
import pimg4 from "../assets/images/blognew-img/poun-4.jpg";
import { ScrollToTopOnMount } from "../helpers/routerup";

export const BlogNewPage = () => {
  const dataList = [
    {
      text: "світлі відтінки в оздобленні: сірі, блакитні, білі;",
    },
    {
      text: "практичність – на першому місці;",
    },
    {
      text: "натуральні матеріали (особливо – меблі та текстиль);",
    },
    {
      text: "декор: кімнатні рослини, постери, текстиль;",
    },
    {
      text: "більше світла і світильників.",
    },
  ];
  const dataFooter = [
    {
      svg: (
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.19264 15.9999V8.70155H7.55129L7.90441 5.85726H5.19264V4.04126C5.19264 3.21779 5.41283 2.65655 6.54986 2.65655L8 2.65585V0.111955C7.74909 0.0774178 6.88833 0 5.88691 0C3.79614 0 2.36475 1.32545 2.36475 3.75971V5.85733H0V8.70163H2.36467V16L5.19264 15.9999Z"
            fill="#353535"
          />
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3874 3.24477C14.3874 3.3913 14.3874 3.53784 14.3874 3.66345C14.3874 7.99678 11.0785 13 5.04712 13C3.18325 13 1.46597 12.4557 0 11.5346C0.251309 11.5556 0.52356 11.5765 0.774869 11.5765C2.30366 11.5765 3.72775 11.0531 4.85864 10.1739C3.41361 10.153 2.19895 9.19002 1.80105 7.89211C2.01047 7.93398 2.19895 7.95491 2.42932 7.95491C2.72251 7.95491 3.01571 7.91304 3.28796 7.82931C1.7801 7.53623 0.649215 6.21739 0.649215 4.62641C0.649215 4.60547 0.649215 4.60547 0.649215 4.58454C1.08901 4.83575 1.59162 4.98229 2.13613 5.00322C1.25654 4.41707 0.670157 3.41224 0.670157 2.26087C0.670157 1.65378 0.837696 1.08857 1.10995 0.607085C2.72251 2.59581 5.15183 3.89372 7.87435 4.04026C7.81152 3.80998 7.79058 3.53784 7.79058 3.28663C7.79058 1.46538 9.25654 0 11.0785 0C12.0209 0 12.8796 0.397746 13.466 1.02576C14.2199 0.879227 14.911 0.607085 15.5602 0.230274C15.3089 1.00483 14.7853 1.63285 14.1152 2.05153C14.7853 1.96779 15.4136 1.80032 16 1.52818C15.5812 2.19807 15.0366 2.78422 14.3874 3.24477Z"
            fill="#353535"
          />
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 2.625H5.25C3 2.625 1.5 3.75 1.5 6.375V11.625C1.5 14.25 3 15.375 5.25 15.375H12.75C15 15.375 16.5 14.25 16.5 11.625V6.375C16.5 3.75 15 2.625 12.75 2.625ZM13.1025 7.1925L10.755 9.0675C10.26 9.465 9.63 9.66 9 9.66C8.37 9.66 7.7325 9.465 7.245 9.0675L4.8975 7.1925C4.6575 6.9975 4.62 6.6375 4.8075 6.3975C5.0025 6.1575 5.355 6.1125 5.595 6.3075L7.9425 8.1825C8.5125 8.64 9.48 8.64 10.05 8.1825L12.3975 6.3075C12.6375 6.1125 12.9975 6.15 13.185 6.3975C13.38 6.6375 13.3425 6.9975 13.1025 7.1925Z"
            fill="#353535"
          />
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="11"
          height="13"
          viewBox="0 0 11 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0H1C0.447715 0 0 0.447716 0 1V11.8036C0 12.6616 1.00949 13.1212 1.6566 12.5579L5.09727 9.56259C5.4888 9.22175 6.07601 9.23716 6.44912 9.59806L9.30475 12.3602C9.93936 12.9741 11 12.5244 11 11.6415V1C11 0.447715 10.5523 0 10 0Z"
            fill="#353535"
          />
        </svg>
      ),
    },
  ];
  const dataAside = [
    {
      link: "Варіанти планування кухні",
    },
    {
      link: "Колірна гамма для кухні",
    },
    {
      link: "Стиль інтер’єру кухні",
    },
    {
      link: "Оздоблення кухні",
    },
    {
      link: "Вибір і розстановка меблів на кухні",
    },
  ];
  const dataAsidePouns = [
    {
      img: pimg1,
      data: "16.02.2023",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: pimg2,
      data: "16.02.2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      img: pimg3,
      data: "16.02.2023",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: pimg4,
      data: "16.02.2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
  ];

  return (
    <>
      <ScrollToTopOnMount />

      <section className="blognew">
        <div className="container">
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
              <div className="blognew__box">
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
