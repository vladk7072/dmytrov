import { FC, useState } from "react";
import { CoconItem } from "./CoconItem";

type PropsType = {
  data: {
    id: number;
    img: any;
    title: string;
  }[];
};

export const CoconList: FC<PropsType> = ({ data }) => {

  return (
    <div className="worksheet__cocon-list">
      {data.map((item) => (
        <CoconItem item={item} />
      ))}
    </div>
  );
};
