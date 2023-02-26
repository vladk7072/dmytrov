import { FC } from "react";
import { Link } from "react-router-dom";

type PropsType = {
  item: {
    title: string;
    subtitle: string;
    price: string;
    text: string;
    link: string;
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
        <Link className="rates__link" to={props.item.link}>
          Переглянути зміст
        </Link>
        <p className="rates__text">{props.item.text}</p>
        <p className="rates__text rates__text-mob">
          {props.item.text}
          <a href="#" className="rates__text-more">
            Читати далi
          </a>
        </p>
      </div>
    </div>
  );
};
