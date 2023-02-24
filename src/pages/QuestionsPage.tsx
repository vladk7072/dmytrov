import { QuestionItem } from "../components/index/QuestionItem";
import { ScrollToTopOnMount } from "../helpers/routerup";

export const QuestionPage = () => {
  const dataQuestionsGridPage = [{ title: "З чого він складається" }];
  const dataQuestionsLinePage = [
    { title: "Що дає проект?" },
    { title: "Вартість та терміни" },
    { title: "Як проходить взаємодія" },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <section className="questions questions-page">
        <div className="container">
          <div className="button top__mob-btn">Замовити проєкт</div>
          <div className="questions__wrapper">
            <h3 className="questions__title title">Всі питання</h3>
            <div className="questions__items">
              {dataQuestionsGridPage.map((item, idx) => (
                <QuestionItem item={item} key={idx} line={false} />
              ))}
              {dataQuestionsLinePage.map((item, idx) => (
                <QuestionItem item={item} key={idx} line={true} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
