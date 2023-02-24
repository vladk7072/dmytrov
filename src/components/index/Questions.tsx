import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { QuestionItem } from "./QuestionItem";

export const Questions = () => {
  const dataQuestionsGrid = [
    { title: "З чого він складається" },
  ];
  const dataQuestionsLine = [
    { title: "Що дає проект?" },
    { title: "Вартість та терміни" },
    { title: "Як проходить взаємодія" },
  ];

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
