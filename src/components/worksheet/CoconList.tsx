import { FC, useState } from "react";
import { CoconItem } from "./CoconItem";
import pick7 from "../../assets/images/worksheet-img/pick7.jpg";

type PropsType = {
  data: {
    id: number;
    img: any;
    title: string;
  }[];
  forinput: string;
};

export const CoconList: FC<PropsType> = ({ data, forinput }) => {
  return (
    <div className="worksheet__cocon-list">
      {data.map((item) => (
        <CoconItem item={item} />
      ))}
      <div className="aside-popup__form-box">
          <img className="aside-popup__form-img" src={pick7} alt="" />
        <div className="aside-popup__form-item aside-popup__form-item-95">
          <input
            name=""
            className="aside-popup__input"
            id={forinput}
            placeholder="Матерiал"
          ></input>
          <label
            className="aside-popup__label aside-popup__label-lh95"
            htmlFor={forinput}
          >
            Матеріал /Коментар
          </label>
        </div>
      </div>
    </div>
  );
};
