import { useState } from "react";
import { Link } from "react-router-dom";
import {
  dataType,
  dataChoise,
  dataPicks,
  dataSex,
  dataSide,
  dataCkecks,
} from "../data/worksheet";

export const WorksheetPage = () => {
  const [progress, setProgress] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageNext = () => {
    setCurrentPage(currentPage + 1);
    setProgress(progress + 10);
  };
  const handlePagePrev = () => {
    setCurrentPage(currentPage - 1);
    setProgress(progress - 10);
  };

  const [activeSex, setActiveSex] = useState<null | number>(null);
  const [activeSide, setActiveSide] = useState<null | number>(null);

  type AddItemType = {
    id: number;
    svg: any;
    title: string;
  };
  const [selectedItems, setSelectedItems] = useState<AddItemType[]>([]);
  const handleAdd = (addItem: AddItemType) => {
    if (!selectedItems.some((item) => item.id === addItem.id)) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, addItem]);
    }
  };
  const handleDelete = (itemId: number) => {
    const index = selectedItems.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      const newItems = [
        ...selectedItems.slice(0, index),
        ...selectedItems.slice(index + 1),
      ];
      setSelectedItems(newItems);
    }
  };

  return (
    <section className="worksheet">
      <div className="container">
        <div className="worksheet__top">
          <div className="worksheet__top-box">
            <h1 className="worksheet__top-title">Заповнення анкети</h1>
            <p className="worksheet___top-text">
              Власна розроблена система онлайн анкетування, завдяки якій ми не
              пропускаємо жодного побажання клієнта.
            </p>

            <div className="worksheet__top-progress">
              <span>Заповнено на</span>
              <div>{progress}%</div>
            </div>
            <div className="account__item-box-line">
              <span style={{ width: `${progress}%` }}></span>
            </div>
          </div>
          <div className="worksheet__top-image"></div>
        </div>
        {currentPage === 5 && (
          <div className="worksheet__item">
            <div className="title worksheet__item-title">
              Заповніть наступні поля:
            </div>
            <div className="worksheet__item-subtitle">
              Виберіть призначення обє'кта
            </div>
            <div className="worksheet__item-forabouts">
              {dataType.map((item, idx) => (
                <div className="worksheet__item-forabout" key={idx}>
                  <div className="worksheet__item-forabout-dot">
                    <span></span>
                  </div>
                  <div className="worksheet__item-forabout-text">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="create__item-btns create__item-btns-lone worksheet__btns">
              {/* <div
              className="button create__item-btn create__item-btn-prev"
              onClick={() => handleSlidePrev()}
            >
              Назад
            </div> */}
              {/* <Link
                      className="button create__item-btn create__item-btn-med"
                      to="../home"
                    >
                      Продовжити пізніше
                    </Link> */}
              <div
                className="button create__item-btn create__item-btn-next"
                onClick={() => handlePageNext()}
              >
                Далі
              </div>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="worksheet__item">
            <div className="title worksheet__item-title">
              Заповніть наступні поля:
            </div>
            <div className="worksheet__item-subtitle">
              Кількість проживаючих осіб
            </div>
            <div className="worksheet__inputs-container">
              <div className="aside-popup__form-item">
                <input
                  name=""
                  type="text"
                  className="aside-popup__input"
                  id="form-counpeople"
                  placeholder="Кількість проживаючих осіб "
                ></input>
                <label className="aside-popup__label" htmlFor="form-counpeople">
                  Кількість проживаючих осіб
                </label>
              </div>

              <div className="worksheet__item-subtitle worksheet__item-subtitle-mt">
                Заповніть наступні поля:
              </div>
              <div className="aside-popup__form-item">
                <input
                  name=""
                  type="text"
                  className="aside-popup__input"
                  id="form-name"
                  placeholder="Ім'я"
                ></input>
                <label className="aside-popup__label" htmlFor="form-name">
                  Ім'я
                </label>
              </div>
              <div className="worksheet__item-forabouts">
                {dataSex.map((item, idx) => (
                  <div
                    className={
                      activeSex === idx
                        ? "worksheet__item-forabout worksheet__item-forabout--active"
                        : "worksheet__item-forabout"
                    }
                    key={idx}
                    onClick={() => setActiveSex(item.id)}
                  >
                    <div className="worksheet__item-forabout-dot">
                      <span></span>
                    </div>
                    <div className="worksheet__item-forabout-text">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="worksheet__inputs-grid3">
                <div className="aside-popup__form-item">
                  <input
                    name=""
                    type="text"
                    className="aside-popup__input"
                    id="form-old"
                    placeholder="Вік"
                  ></input>
                  <label className="aside-popup__label" htmlFor="form-old">
                    Вік
                  </label>
                </div>
                <div className="aside-popup__form-item">
                  <input
                    name=""
                    type="text"
                    className="aside-popup__input"
                    id="form-long"
                    placeholder="Зріст см (орієнтовно)"
                  ></input>
                  <label className="aside-popup__label" htmlFor="form-long">
                    Зріст см (орієнтовно)
                  </label>
                </div>
                <div className="aside-popup__form-item">
                  <input
                    name=""
                    type="text"
                    className="aside-popup__input"
                    id="form-weight"
                    placeholder="Вага кг (орієнтовно)"
                  ></input>
                  <label className="aside-popup__label" htmlFor="form-weight">
                    Вага кг (орієнтовно)
                  </label>
                </div>
              </div>
              <div className="worksheet__item-forabouts">
                {dataSide.map((item, idx) => (
                  <div
                    className={
                      activeSide === idx
                        ? "worksheet__item-forabout worksheet__item-forabout--active"
                        : "worksheet__item-forabout"
                    }
                    key={idx}
                    onClick={() => setActiveSide(item.id)}
                  >
                    <div className="worksheet__item-forabout-dot">
                      <span></span>
                    </div>
                    <div className="worksheet__item-forabout-text">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="aside-popup__form-item">
                <input
                  name=""
                  type="text"
                  className="aside-popup__input"
                  id="form-special"
                  placeholder="Фізичні особливості (Якщо є)"
                ></input>
                <label className="aside-popup__label" htmlFor="form-special">
                  Фізичні особливості (Якщо є)
                </label>
              </div>
            </div>
            <div className="create__item-btns worksheet__btns">
              <div
                className="button create__item-btn create__item-btn-prev"
                onClick={() => handlePagePrev()}
              >
                Назад
              </div>
              <Link
                className="button create__item-btn create__item-btn-med"
                to="../home"
              >
                Продовжити пізніше
              </Link>
              <div
                className="button create__item-btn create__item-btn-next"
                onClick={() => handlePageNext()}
              >
                Далі
              </div>
            </div>
          </div>
        )}
        {currentPage === 3 && (
          <div className="worksheet__item">
            <div className="worksheet__item-subtitle">
              Дайте відповідь на запитання:
            </div>
            <div className="title worksheet__item-title">
              Як часто у вас бувають гості?
            </div>
            <div className="aside-popup__form-item">
              <textarea
                name=""
                className="aside-popup__input aside-popup__input-textarea worksheet__item-textarea"
                id="form-forguests"
                placeholder="Вiдповiдь"
              ></textarea>
              <label className="aside-popup__label" htmlFor="form-forguests">
                Вiдповiдь
              </label>
            </div>
            <div className="create__item-btns worksheet__btns">
              <div
                className="button create__item-btn create__item-btn-prev"
                onClick={() => handlePagePrev()}
              >
                Назад
              </div>
              <Link
                className="button create__item-btn create__item-btn-med"
                to="../home"
              >
                Продовжити пізніше
              </Link>
              <div
                className="button create__item-btn create__item-btn-next"
                onClick={() => handlePageNext()}
              >
                Далі
              </div>
            </div>
          </div>
        )}
        {currentPage === 4 && (
          <div className="worksheet__item">
            <div className="title worksheet__item-title">
              Вибір бажаних приміщень:
            </div>
            <div className="worksheet__choise">
              <div className="worksheet__choise-col">
                <div className="worksheet__choise-title">Примiщеня</div>
                <div className="worksheet__choise-text">
                  Оберiть або перетягнiть кiмнати (можно обрати декiлька
                  однакових)
                </div>
                <div className="worksheet__choise-items">
                  {dataChoise.map((item) => (
                    <div
                      className={
                        selectedItems.some((el) => el.id === item.id)
                          ? "worksheet__choise-item worksheet__choise-item--active"
                          : "worksheet__choise-item"
                      }
                      key={item.id}
                      onClick={() => handleAdd(item)}
                    >
                      {item.svg}
                      <div className="worksheet__choise-item-title">
                        {item.title}
                      </div>
                      <div className="worksheet__choise-item-dec">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.9513 0.164973C17.4285 -1.31726e-05 15.5091 -1.30968e-05 13.0603 2.36549e-07H12.9397C10.4909 -1.30968e-05 8.57148 -1.31726e-05 7.04864 0.164973C5.49459 0.333347 4.23541 0.683094 3.16032 1.4642C2.50945 1.93708 1.93708 2.50945 1.4642 3.16032C0.683094 4.23541 0.333347 5.49459 0.164973 7.04864C-1.31726e-05 8.57148 -1.30968e-05 10.4909 2.36549e-07 12.9397V13.0603C-1.30968e-05 15.5091 -1.31726e-05 17.4285 0.164973 18.9513C0.333347 20.5055 0.683094 21.7645 1.4642 22.8397C1.93708 23.4905 2.50945 24.0629 3.16032 24.5357C4.23541 25.3169 5.49459 25.6667 7.04864 25.8351C8.57145 26 10.4909 26 12.9396 26H13.0604C15.5091 26 17.4285 26 18.9513 25.8351C20.5055 25.6667 21.7645 25.3169 22.8397 24.5357C23.4905 24.0629 24.0629 23.4905 24.5357 22.8397C25.3169 21.7645 25.6667 20.5055 25.8351 18.9513C26 17.4285 26 15.5091 26 13.0604V12.9396C26 10.4909 26 8.57145 25.8351 7.04864C25.6667 5.49459 25.3169 4.23541 24.5357 3.16032C24.0629 2.50945 23.4905 1.93708 22.8397 1.4642C21.7645 0.683094 20.5055 0.333347 18.9513 0.164973Z"
                            fill="#E55733"
                          />
                          <path
                            className="worksheet__choise-item-dec-path"
                            d="M14 9C14 8.44772 13.5523 8 13 8C12.4477 8 12 8.44772 12 9V12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H12V17C12 17.5523 12.4477 18 13 18C13.5523 18 14 17.5523 14 17V14H17C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12H14V9Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="worksheet__choise-col worksheet__choise-col-dec">
                <div className="worksheet__choise-title">Обранi примiщеня</div>
                <div className="worksheet__choise-text">
                  Перевiрте обранi кiмнати та залиште коменторi для кожної, якщо
                  потрiбно
                </div>
                {selectedItems?.map((item) => (
                  <div
                    className="worksheet__choise-item"
                    key={item.id}
                    onClick={() => handleDelete(item.id)}
                  >
                    {item.svg}
                    <div className="worksheet__choise-item-title">
                      {item.title}
                    </div>
                    <div className="worksheet__choise-item-dec worksheet__choise-item-dec--delete">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.875 2.90625H11.5938V2.125C11.5938 1.66916 11.4127 1.23199 11.0903 0.90966C10.768 0.587332 10.3308 0.40625 9.875 0.40625H6.125C5.66916 0.40625 5.23199 0.587332 4.90966 0.90966C4.58733 1.23199 4.40625 1.66916 4.40625 2.125V2.90625H1.125C1.00068 2.90625 0.881451 2.95564 0.793544 3.04354C0.705636 3.13145 0.65625 3.25068 0.65625 3.375C0.65625 3.49932 0.705636 3.61855 0.793544 3.70646C0.881451 3.79436 1.00068 3.84375 1.125 3.84375H1.45625L2.4375 16.0125C2.47484 16.442 2.67106 16.8421 2.98778 17.1345C3.3045 17.4269 3.71893 17.5907 4.15 17.5938H11.85C12.2811 17.5907 12.6955 17.4269 13.0122 17.1345C13.3289 16.8421 13.5252 16.442 13.5625 16.0125L14.5437 3.84375H14.875C14.9993 3.84375 15.1185 3.79436 15.2065 3.70646C15.2944 3.61855 15.3438 3.49932 15.3438 3.375C15.3438 3.25068 15.2944 3.13145 15.2065 3.04354C15.1185 2.95564 14.9993 2.90625 14.875 2.90625ZM5.34375 2.125C5.34375 1.9178 5.42606 1.71909 5.57257 1.57257C5.71909 1.42606 5.9178 1.34375 6.125 1.34375H9.875C10.0822 1.34375 10.2809 1.42606 10.4274 1.57257C10.5739 1.71909 10.6562 1.9178 10.6562 2.125V2.90625H5.34375V2.125ZM12.625 15.9375C12.6079 16.1331 12.5182 16.3153 12.3737 16.4483C12.2292 16.5813 12.0401 16.6554 11.8438 16.6562H4.15C3.95469 16.6539 3.76722 16.579 3.624 16.4462C3.48078 16.3134 3.39204 16.1321 3.375 15.9375L2.375 3.84375H13.625L12.625 15.9375ZM10.9688 7.125V13.375C10.9688 13.4993 10.9194 13.6185 10.8315 13.7065C10.7435 13.7944 10.6243 13.8438 10.5 13.8438C10.3757 13.8438 10.2565 13.7944 10.1685 13.7065C10.0806 13.6185 10.0312 13.4993 10.0312 13.375V7.125C10.0312 7.00068 10.0806 6.88145 10.1685 6.79354C10.2565 6.70564 10.3757 6.65625 10.5 6.65625C10.6243 6.65625 10.7435 6.70564 10.8315 6.79354C10.9194 6.88145 10.9688 7.00068 10.9688 7.125ZM8.46875 7.125V13.375C8.46875 13.4993 8.41936 13.6185 8.33146 13.7065C8.24355 13.7944 8.12432 13.8438 8 13.8438C7.87568 13.8438 7.75645 13.7944 7.66854 13.7065C7.58064 13.6185 7.53125 13.4993 7.53125 13.375V7.125C7.53125 7.00068 7.58064 6.88145 7.66854 6.79354C7.75645 6.70564 7.87568 6.65625 8 6.65625C8.12432 6.65625 8.24355 6.70564 8.33146 6.79354C8.41936 6.88145 8.46875 7.00068 8.46875 7.125ZM5.96875 7.125V13.375C5.96875 13.4993 5.91936 13.6185 5.83146 13.7065C5.74355 13.7944 5.62432 13.8438 5.5 13.8438C5.37568 13.8438 5.25645 13.7944 5.16854 13.7065C5.08064 13.6185 5.03125 13.4993 5.03125 13.375V7.125C5.03125 7.00068 5.08064 6.88145 5.16854 6.79354C5.25645 6.70564 5.37568 6.65625 5.5 6.65625C5.62432 6.65625 5.74355 6.70564 5.83146 6.79354C5.91936 6.88145 5.96875 7.00068 5.96875 7.125Z"
                          fill="#353535"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="worksheet__choise-col">
                <div className="worksheet__choise-title">Коментарi</div>
                <div className="worksheet__choise-text">
                  Для кого/чого призначене приміщення, або ж інші побажання?
                </div>
                {selectedItems.map((el) => (
                  <div className="aside-popup__form-item" key={el.id}>
                    <textarea
                      name=""
                      className="aside-popup__input aside-popup__input-textarea worksheet__textarea"
                      id="form-comment"
                      placeholder="Коментар"
                    ></textarea>
                    <label
                      className="aside-popup__label"
                      htmlFor="form-comment"
                    >
                      {el.title}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="create__item-btns worksheet__btns">
              <div
                className="button create__item-btn create__item-btn-prev"
                onClick={() => handlePagePrev()}
              >
                Назад
              </div>
              <Link
                className="button create__item-btn create__item-btn-med"
                to="../home"
              >
                Продовжити пізніше
              </Link>
              <div
                className="button create__item-btn create__item-btn-next"
                onClick={() => handlePageNext()}
              >
                Далі
              </div>
            </div>
          </div>
        )}
        {currentPage === 1 && (
          <div className="worksheet__item">
            <div className="title worksheet__item-title worksheet__item-title-mb10">
              Вибір оздоблення:
            </div>
            <div className="worksheet__item-subtitle">Підлогове покриття</div>
            <div className="worksheet__pick">
              <div className="worksheet__pick-top">
                <div className="worksheet__pick-top-items">
                  <div className="worksheet__pick-top-item"></div>
                  {dataPicks.map((item) => (
                    <div className="worksheet__pick-top-item" key={item.id}>
                      <img src={item.img} alt="" />
                      <div className="worksheet__pick-top-item-title">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="worksheet__pick-item">
                <div className="worksheet__pick-item-box">
                  {/* svg */}
                  <div className="worksheet__pick-item-title">Спальня</div>
                </div>
                <div className="worksheet__pick-item-box">
                  <div className="worksheet__pick-item-checks">
                    {dataCkecks.map((item) => (
                  <div className="worksheet__pick-item-check" key={item.id}>
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
                    ))}
                  </div>
                </div>
                <div className="worksheet__pick-item-box">
                  <div className="aside-popup__form-item aside-popup__textarea">
                    <input
                      name=""
                      className="aside-popup__input"
                      id="form-material"
                      placeholder="Матерiал"
                    ></input>
                    <label
                      className="aside-popup__label"
                      htmlFor="form-material"
                    >
                      Матерiал
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="create__item-btns worksheet__btns">
              <div
                className="button create__item-btn create__item-btn-prev"
                onClick={() => handlePagePrev()}
              >
                Назад
              </div>
              <Link
                className="button create__item-btn create__item-btn-med"
                to="../home"
              >
                Продовжити пізніше
              </Link>
              <div
                className="button create__item-btn create__item-btn-next"
                onClick={() => handlePageNext()}
              >
                Далі
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
