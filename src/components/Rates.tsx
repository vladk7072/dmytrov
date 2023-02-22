import { useState } from "react";

export const Rates = () => {
  const dataRates = [
    {
      id: 0,
      title: "Базовий",
      text: "Технічний проєкт",
    },
    {
      id: 1,
      title: "Стандарт",
      text: "Технічний проєкт",
    },
    {
      id: 2,
      title: "Премiум",
      text: "Технічний+Дизайн проєкт",
    },
  ];

  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div className="services__range-items">
      {dataRates.map((item, idx) => (
        <div
          className={
            activeItem === idx
              ? "services__range-item services__range-item--active"
              : "services__range-item"
          }
          key={idx}
          onClick={() => setActiveItem(idx)}
        >
          <div className="services__range-item-title">{item.title}</div>
          <div className="services__range-item-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};
