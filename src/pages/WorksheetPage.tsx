import { useState } from "react";
import { Link } from "react-router-dom";
import { WorksheetPicks } from "../components/WorksheetPicks";
import {
  dataType,
  dataChoise,
  dataPicks,
  dataSex,
  dataSide,
  dataWorksheetPicks,
  dataTechnical,
  dataOptions,
  dataFlor,
} from "../data/worksheet";
import { ScrollToTopOnMount } from "../helpers/routerup";

export const WorksheetPage = () => {
  const [countSlides, setCountSlides] = useState(0); // количество страниц опросника
  let progressPercent = (countSlides / 8) * 100;

  const [forabout, setForabout] = useState<null | number>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageNext = () => {
    setCurrentPage(currentPage + 1);
    setCountSlides(countSlides + 1);
  };
  const handlePagePrev = () => {
    setCurrentPage(currentPage - 1);
    setCountSlides(countSlides - 1);
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

  const [selectedItemsTech, setSelectedItemsTech] = useState<AddItemType[]>([]);
  const handleAddTech = (addItem: AddItemType) => {
    if (!selectedItemsTech.some((item) => item.id === addItem.id)) {
      setSelectedItemsTech((prevSelectedItemsTech) => [
        ...prevSelectedItemsTech,
        addItem,
      ]);
    }
  };
  const handleDeleteTech = (itemId: number) => {
    const index = selectedItemsTech.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      const newItems = [
        ...selectedItemsTech.slice(0, index),
        ...selectedItemsTech.slice(index + 1),
      ];
      setSelectedItemsTech(newItems);
    }
  };

  const [optionActive, setOptionActive] = useState<number | null>(null);

  const [checkFlor, setCheckFlor] = useState<any[]>([]);

  const handleCheckFlor = (el: any) => {
    if (!checkFlor.some((item) => item.id === el.id)) {
      setCheckFlor((prevSelectedItemsTech) => [...prevSelectedItemsTech, el]);
    } else if (checkFlor.some((item) => item.id === el.id)) {
      const index = checkFlor.findIndex((item) => item.id === el.id);

      if (index !== -1) {
        const newItems = [
          ...checkFlor.slice(0, index),
          ...checkFlor.slice(index + 1),
        ];
        setCheckFlor(newItems);
      }
    }
  };

  return (
    <>
      <ScrollToTopOnMount />
      <section className="worksheet">
        <div className="container">
          <div className="button top__mob-btn">Замовити проєкт</div>
          <div className="worksheet__top">
            <div className="worksheet__top-box">
              <h1 className="worksheet__top-title">Заповнення анкети</h1>
              <p className="worksheet__top-text">
                Власна розроблена система онлайн анкетування, завдяки якій ми не
                пропускаємо жодного побажання клієнта.
              </p>

              <div className="worksheet__top-progress">
                <span>Заповнено на</span>
                <div>{progressPercent}%</div>
              </div>
              <div className="account__item-box-line">
                <span style={{ width: `${progressPercent}%` }}></span>
              </div>
            </div>
            <div className="worksheet__top-image"></div>
          </div>
          {currentPage === 1 && (
            <div className="worksheet__item">
              <div className="title worksheet__item-title">
                Заповніть наступні поля:
              </div>
              <div className="worksheet__item-subtitle">
                Виберіть призначення обє'кта
              </div>
              <div className="worksheet__item-forabouts worksheet__item-forabouts-mb28">
                {dataType.map((item, idx) => (
                  <div
                    className={
                      forabout === item.id
                        ? "worksheet__item-forabout worksheet__item-forabout--active"
                        : "worksheet__item-forabout"
                    }
                    key={idx}
                    onClick={() => setForabout(item.id)}
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
                  <label
                    className="aside-popup__label"
                    htmlFor="form-counpeople"
                  >
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
                        {selectedItems.some((el) => el.id === item.id) && (
                          <div
                            className="worksheet__choise-mob-delete"
                            onClick={() => handleDelete(item.id)}
                          >
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
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="worksheet__choise-col worksheet__choise-col-dec">
                  <div className="worksheet__choise-title">
                    Обранi примiщеня
                  </div>
                  <div className="worksheet__choise-text">
                    Перевiрте обранi кiмнати та залиште коменторi для кожної,
                    якщо потрiбно
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
                        id={el.title}
                        placeholder="Коментар"
                      ></textarea>
                      <label className="aside-popup__label" htmlFor={el.title}>
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
          {currentPage === 5 && (
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
                <div className="worksheet__pick-choise">
                  {dataWorksheetPicks.map((item) => (
                    <div className="worksheet__pick-item" key={item.id}>
                      <div className="worksheet__pick-item-box">
                        {item.svg}
                        <div className="worksheet__pick-item-title">
                          {item.title}
                        </div>
                      </div>
                      <WorksheetPicks picks={item.picks} />
                      <div className="worksheet__pick-item-box worksheet__pick-item-box-input">
                        <div className="aside-popup__form-item">
                          <input
                            name=""
                            className="aside-popup__input"
                            id={item.inputfor}
                            placeholder="Матерiал"
                          ></input>
                          <label
                            className="aside-popup__label"
                            htmlFor={item.inputfor}
                          >
                            Матерiал
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
              <div className="create__item-btns worksheet__btns worksheet__btns-nobt">
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
          {currentPage === 6 && (
            <div className="worksheet__item">
              <div className="title worksheet__item-title">
                Вибиріть та опишіть техніку яка планується до використання
              </div>
              <div className="worksheet__choise">
                <div className="worksheet__choise-col">
                  <div className="worksheet__choise-title">Список</div>
                  <div className="worksheet__choise-text">
                    Оберiть або перетягнiть кiмнати (можно обрати декiлька
                    однакових)
                  </div>
                  <div className="worksheet__choise-items">
                    {dataTechnical.map((item) => (
                      <div
                        className={
                          selectedItemsTech.some((el) => el.id === item.id)
                            ? "worksheet__choise-item worksheet__choise-item--active"
                            : "worksheet__choise-item"
                        }
                        key={item.id}
                        onClick={() => handleAddTech(item)}
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
                        {selectedItemsTech.some((el) => el.id === item.id) && (
                          <div
                            className="worksheet__choise-mob-delete"
                            onClick={() => handleDeleteTech(item.id)}
                          >
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
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="worksheet__choise-col worksheet__choise-col-dec">
                  <div className="worksheet__choise-title">Обрана технiка</div>
                  <div className="worksheet__choise-text">
                    Перевiрте обранi кiмнати та залиште коменторi для кожної,
                    якщо потрiбно
                  </div>
                  {selectedItemsTech?.map((item) => (
                    <div
                      className="worksheet__choise-item"
                      key={item.id}
                      onClick={() => handleDeleteTech(item.id)}
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
                    Поля для тексту/уточнюючi питання
                  </div>
                  {selectedItemsTech.map((el) => (
                    <div className="aside-popup__form-item" key={el.id}>
                      <textarea
                        name=""
                        className="aside-popup__input aside-popup__input-textarea worksheet__textarea"
                        id={el.title}
                        placeholder="Коментар"
                      ></textarea>
                      <label className="aside-popup__label" htmlFor={el.title}>
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
          {currentPage === 7 && (
            <div className="worksheet__item">
              <div className="title worksheet__item-title">
                Побажання по кухні:
              </div>
              <div className="worksheet__item-subtitle">
                Виберіть одну чи кілька опцій
              </div>
              <div className="worksheet__option-items">
                {dataOptions.map((item) => (
                  <div
                    className={
                      optionActive === item.id
                        ? "worksheet__option-item worksheet__option-item--active"
                        : "worksheet__option-item"
                    }
                    key={item.id}
                    onClick={() => setOptionActive(item.id)}
                  >
                    <img
                      className="worksheet__option-img"
                      src={item.img}
                      alt=""
                    />
                    <div className="worksheet__option-title">{item.title}</div>
                  </div>
                ))}
              </div>
              <div className="worksheet__item-subtitle">Коментарi</div>
              <div className="aside-popup__form-item">
                <textarea
                  name=""
                  className="aside-popup__input aside-popup__input-textarea worksheet__option-textarea worksheet__item-textarea"
                  id="form-wants"
                  placeholder="Побажання або рекомендацiї"
                ></textarea>
                <label className="aside-popup__label" htmlFor="form-wants">
                  Побажання або рекомендацiї
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
          {currentPage === 8 && (
            <div className="worksheet__item">
              <div className="title worksheet__item-title">
                Вибір наповнення приміщення:
              </div>
              <div className="worksheet__choise worksheet__choise-2">
                <div className="worksheet__choise-col worksheet__choise-col-rdec">
                  <div className="worksheet__choise-title">Спальня</div>
                  <div className="worksheet__choise-title worksheet__choise-title-mob ">
                    Вибір наповнення приміщення:
                  </div>
                  <div className="worksheet__choise-title worksheet__choise-title-dec">
                    <svg
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.0625 16.1562H28.5938V12.4062C28.5931 11.9092 28.3953 11.4326 28.0439 11.0811C27.6924 10.7297 27.2158 10.5319 26.7188 10.5312V2.5625C26.7181 2.06542 26.5203 1.58888 26.1689 1.23739C25.8174 0.885904 25.3408 0.688151 24.8438 0.6875H5.15625C4.65917 0.688151 4.18263 0.885904 3.83114 1.23739C3.47965 1.58888 3.2819 2.06542 3.28125 2.5625V10.5312C2.78417 10.5319 2.30763 10.7297 1.95614 11.0811C1.60465 11.4326 1.4069 11.9092 1.40625 12.4062V16.1562H0.9375C0.81318 16.1562 0.693951 16.2056 0.606044 16.2935C0.518136 16.3815 0.46875 16.5007 0.46875 16.625V18.5C0.46875 18.6243 0.518136 18.7435 0.606044 18.8315C0.693951 18.9194 0.81318 18.9688 0.9375 18.9688H1.40625V20.8438C1.40625 20.9681 1.45564 21.0873 1.54354 21.1752C1.63145 21.2631 1.75068 21.3125 1.875 21.3125H3.28125C3.38959 21.3126 3.49459 21.275 3.57836 21.2063C3.66213 21.1376 3.71947 21.042 3.74062 20.9357L4.13437 18.9688H25.8656L26.2594 20.9357C26.2805 21.042 26.3379 21.1376 26.4216 21.2063C26.5054 21.275 26.6104 21.3126 26.7188 21.3125H28.125C28.2493 21.3125 28.3685 21.2631 28.4565 21.1752C28.5444 21.0873 28.5938 20.9681 28.5938 20.8438V18.9688H29.0625C29.1868 18.9688 29.306 18.9194 29.394 18.8315C29.4819 18.7435 29.5312 18.6243 29.5312 18.5V16.625C29.5312 16.5007 29.4819 16.3815 29.394 16.2935C29.306 16.2056 29.1868 16.1562 29.0625 16.1562ZM4.21875 2.5625C4.21908 2.31396 4.31795 2.07569 4.4937 1.89995C4.66944 1.7242 4.90771 1.62533 5.15625 1.625H24.8438C25.0923 1.62533 25.3306 1.7242 25.5063 1.89995C25.682 2.07569 25.7809 2.31396 25.7812 2.5625V10.5312H24.8438V8.65625C24.8431 8.15917 24.6453 7.68263 24.2939 7.33114C23.9424 6.97965 23.4658 6.7819 22.9688 6.78125H17.3438C16.8467 6.7819 16.3701 6.97965 16.0186 7.33114C15.6672 7.68263 15.4694 8.15917 15.4688 8.65625V10.5312H14.5312V8.65625C14.5306 8.15917 14.3328 7.68263 13.9814 7.33114C13.6299 6.97965 13.1533 6.7819 12.6562 6.78125H7.03125C6.53417 6.7819 6.05763 6.97965 5.70614 7.33114C5.35465 7.68263 5.1569 8.15917 5.15625 8.65625V10.5312H4.21875V2.5625ZM23.9062 8.65625V10.5312H16.4062V8.65625C16.4066 8.40771 16.5055 8.16944 16.6812 7.9937C16.8569 7.81795 17.0952 7.71908 17.3438 7.71875H22.9688C23.2173 7.71908 23.4556 7.81795 23.6313 7.9937C23.807 8.16944 23.9059 8.40771 23.9062 8.65625ZM13.5938 8.65625V10.5312H6.09375V8.65625C6.09408 8.40771 6.19295 8.16944 6.3687 7.9937C6.54444 7.81795 6.78271 7.71908 7.03125 7.71875H12.6562C12.9048 7.71908 13.1431 7.81795 13.3188 7.9937C13.4945 8.16944 13.5934 8.40771 13.5938 8.65625ZM2.34375 12.4062C2.34408 12.1577 2.44295 11.9194 2.6187 11.7437C2.79444 11.568 3.03271 11.4691 3.28125 11.4688H26.7188C26.9673 11.4691 27.2056 11.568 27.3813 11.7437C27.557 11.9194 27.6559 12.1577 27.6562 12.4062V16.1562H2.34375V12.4062ZM2.89687 20.375H2.34375V18.9688H3.17813L2.89687 20.375ZM27.6562 20.375H27.1031L26.8219 18.9688H27.6562V20.375ZM28.5938 18.0312H1.40625V17.0938H28.5938V18.0312Z"
                        fill="#353535"
                      />
                    </svg>
                    Спальня
                  </div>
                  <div className="worksheet__flor-items">
                    {dataFlor.map((item) => (
                      <div
                        className={
                          checkFlor.some((el) => el.id === item.id)
                            ? "worksheet__flor-item worksheet__flor-item--active"
                            : "worksheet__flor-item"
                        }
                        key={item.id}
                        onClick={() => handleCheckFlor(item)}
                      >
                        <img
                          src={item.img}
                          alt=""
                          className="worksheet__flor-img"
                        />
                        <div className="worksheet__flor-title">
                          {item.title}
                        </div>
                        <div className="worksheet__flor-check">
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
                          <span></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="worksheet__choise-col">
                  <div className="worksheet__choise-title">Коментарi</div>
                  <div className="worksheet__choise-title worksheet__choise-title-mob ">
                    Вибір наповнення приміщення:
                  </div>
                  {checkFlor.map((el) => (
                    <div className="aside-popup__form-item" key={el.id}>
                      <textarea
                        name=""
                        className="aside-popup__input aside-popup__input-textarea worksheet__textarea"
                        id={el.title}
                        placeholder="Коментар"
                      ></textarea>
                      <label className="aside-popup__label" htmlFor={el.title}>
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
                <Link
                  className="button create__item-btn create__item-btn-next"
                  to="/home"
                >
                  Завершити
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
