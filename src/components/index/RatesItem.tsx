import { FC } from "react";

type PropsType = {
  item: {
    title: string;
    subtitle: string;
    price: string;
    text: string;
  };
};

export const RatesItem: FC<PropsType> = (props) => {
  return (
    <div className="rates__item">
      <div className="rates__item-top">
        <h4 className="rates__item-title">{props.item.title}</h4>
        <div className="rates__item-text">{props.item.subtitle}</div>
      </div>
      <div className="rates__item-content">
        <div className="rates__price">
          {props.item.price}
          <span>грн/м2</span>
        </div>
        <a className="rates__link" href="#">
          Переглянути зміст
        </a>
        <p className="rates__text">{props.item.text}</p>
      </div>
    </div>
  );
};
