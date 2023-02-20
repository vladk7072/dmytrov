import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { QuestionItem } from "./QuestionItem";

export const Questions = () => {
  const data = [
    { title: "Що дає проект?" },
    { title: "З чого він складається" },
    { title: "Вартість та терміни" },
    { title: "Як проходить взаємодія" },
  ];

  return (
    <section className="questions">
      <div className="container">
        <div className="questions__wrapper">
          <h3 className="questions__title title">Часті питання</h3>
          <div className="questions__items">
            {data.map((item, idx) => (
              <QuestionItem item={item} key={idx} />
            ))}
          </div>
          <Link className="questions__link button" to="questions">
            Всі питання
          </Link>
        </div>
      </div>
    </section>
  );
};
