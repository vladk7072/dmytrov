import { FC, useState } from "react";

type PropsType = {
  item: {
    title: string;
  };
  line: boolean;
};

export const QuestionItem: FC<PropsType> = (props) => {
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
        open ? "questions__item questions__item--active" : "questions__item"
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
        <div className="questions__item-title">{props.item.title}</div>
      </div>
      {!props.line ? (
        <div className="questions__item-list">
          <div className="questions__grid">
            <div className="questions__grid-item">
              <div className="questions__grid-title">Тип проекту</div>
              <div className="questions__grid-name">Базовий</div>
              <div className="questions__grid-name">Стандарт</div>
              <div className="questions__grid-name">Преміум</div>
            </div>
            <div className="questions__grid-item">
              <div className="questions__grid-title">Вартість за м2</div>
              <div className="questions__grid-name">300грн м2</div>
              <div className="questions__grid-name">500грн м2</div>
              <div className="questions__grid-name">1 000 грн м2</div>
            </div>
            <div className="questions__grid-item">
              <div className="questions__grid-title">Терміни виконання</div>
              <div className="questions__grid-name">до 20 днів</div>
              <div className="questions__grid-name">до 35 днів</div>
              <div className="questions__grid-name">30-90 днів</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="questions__item-text-box">
          <p className="questions__item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam quisquam laboriosam harum, expedita unde saepe? Earum amet magnam non ducimus, sunt quos laudantium harum, deserunt, error neque cum corrupti!
          </p>
        </div>
      )}
    </div>
  );
};
