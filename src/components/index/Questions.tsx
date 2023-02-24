import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { dataQuestionsGrid, dataQuestionsLine } from "../../data/questions";
import { QuestionItem } from "./QuestionItem";

export const Questions = () => {


  return (
    <section className="questions">
      <div className="container">
        <div className="questions__wrapper">
          <h3 className="questions__title title">Часті питання</h3>
          <div className="questions__items">
            {dataQuestionsGrid.map((item, idx) => (
              <QuestionItem item={item} key={idx} line={false} />
            ))}
            {dataQuestionsLine.map((item, idx) => (
              <QuestionItem item={item} key={idx} line={true} />
            ))}
          </div>
          <Link className="questions__link button" to="../questions">
            Всі питання
          </Link>
        </div>
      </div>
    </section>
  );
};
