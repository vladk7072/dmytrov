import { FC, useState } from "react";

type PropsType = {
  item: {
    title: string;
    text: string;
    price: string;
    img: any;
  };
};

export const AllServicesItem: FC<PropsType> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div
      className={
        open
          ? "questions__item questions__item-all questions__item-all--active"
          : "questions__item questions__item-all"
      }
      onClick={() => handleOpen()}
    >
      <div
        className={
          open
            ? "questions__item-line questions__item-line--active"
            : "questions__item-line"
        }
      >
        <div className="questions__item-title questions__item-title-all">
          {props.item.title}
        </div>
      </div>
      <div className="questions__item-text-box">
        <div className="allservices__question-inner">
          <img
            src={props.item.img}
            alt=""
            className="allservices__question-img"
          />
          <div className="allservices__question-box">
            <p className="questions__item-text questions__item-text-noml">{props.item.text}</p>
            <div className="allservices__question-price">
              <span>Вартість за м2</span>
              {props.item.price}
            </div>
            <a className="button allservices__question-btn" href="#">
              Замовити послугу
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
