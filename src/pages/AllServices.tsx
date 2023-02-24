import topbg from "../assets/images/allservices-img/topbg.jpg";
import { AllServicesItem } from "../components/allservices/AllservicesQuestion";
import { RatesItem } from "../components/index/RatesItem";
import { dataQuestionsBlock } from "../data/questions";
import { dataTarifs } from "../data/rates";

export const AllServices = () => {

  return (
    <>
      <section className="allservices">
        <div className="container">
          <div className="button top__mob-btn">Замовити проєкт</div>
          <div className="allservices__wrapper">
            <div className="allservices__top">
              <h1 className="main-title allservices__title">Всi послуги</h1>
              <img className="allservices__img" src={topbg} alt="" />
            </div>
            <div className="rates">
              <h3 className="rates__title title">Тарифи</h3>
              <div className="rates__items">
                {dataTarifs.map((item, idx) => (
                  <RatesItem item={item} key={idx} />
                ))}
              </div>
            </div>
            <div className="allservices__button">
              <a className="button allservices__btn" href="#">
                Замовити проєкт
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="questions questions-all">
        <div className="container">
          <div className="questions__wrapper">
            <h4 className="questions__allsubtitle">Додаткові послуги:</h4>
            <div className="questions__items">
              {dataQuestionsBlock.map((item, idx) => (
                <AllServicesItem item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
