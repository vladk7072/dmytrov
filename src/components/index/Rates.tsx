import { dataTarifs } from "../../data/rates";
import { RatesItem } from "./RatesItem";

export const Rates = () => {

  return (
    <section className="rates">
      <div className="container">
        <div className="rates__wrapper">
          <h3 className="rates__title title">Тарифи</h3>
          <div className="rates__items">
            {dataTarifs.map((item, idx) => (
              <RatesItem item={item} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
