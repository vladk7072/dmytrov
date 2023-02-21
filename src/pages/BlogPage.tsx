import { Link } from "react-router-dom";
import img1 from "../assets/images/blog-img/1.jpg";
import img2 from "../assets/images/blog-img/2.jpg";
import img3 from "../assets/images/blog-img/3.jpg";
import img4 from "../assets/images/blog-img/4.jpg";
import img5 from "../assets/images/blog-img/5.jpg";
import img6 from "../assets/images/blog-img/6.jpg";
import img7 from "../assets/images/blog-img/7.jpg";

export const BlogPage = () => {
  const data = [
    {
      data: "16.02.2023",
      img: img1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "new-1",
    },
    {
      data: "16.02.2023",
      img: img2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "new-1",
    },
    {
      data: "16.02.2023",
      img: img3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "new-1",
    },
    {
      data: "16.02.2023",
      img: img4,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "new-1",
    },
    {
      data: "16.02.2023",
      img: img5,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "new-1",
    },
    {
      data: "16.02.2023",
      img: img6,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "new-1",
    },
    {
      data: "16.02.2023",
      img: img7,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "new-1",
    },
  ];

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__wrapper">
          <h1 className="blog__title">Блог</h1>
          <h2 className="blog__text">
            Знайдiть кориснi поради та цiкавi iдеї у нашому блозi
          </h2>
          <div className="blog__items">
            {data.map((item) => (
              <div className="blog__item">
                <div className="blog__item-data">{item.data}</div>
                <div className="blog__item-image">
                  <img src={item.img} alt="" />
                </div>
                <div className="blog__item-box">
                  <h3 className="blog__box-title">{item.title}</h3>
                  <p className="blog__box-text">{item.text}</p>
                  <Link className="blog__box-link" to={item.link}>
                    Читати далi
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="blog__pagination">
            <div className="blog__pagination-arrow blog__pagination-arrow-prev">
              <svg
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.466 29.2461L16.9407 27.5779L3.96966 16.1119L38 16.1119L38 13.8853L3.96966 13.8853L16.9407 2.41935L15.466 0.751137L2.51879e-06 14.4226L2.6195e-06 15.5746L15.466 29.2461Z"
                  fill="#353535"
                  fill-opacity="0.4"
                />
              </svg>
            </div>
            <div className="blog__pagination-items">
              <div className="blog__pagination-item blog__pagination-item--active">
                1
              </div>
              <div className="blog__pagination-item">2</div>
              <div className="blog__pagination-item">3</div>
              <div className="blog__pagination-item">4</div>
              <div className="blog__pagination-item">5</div>
              <div className="blog__pagination-item blog__pagination-item-dots">
                ...
              </div>
              <div className="blog__pagination-item">10</div>
            </div>
            <div className="blog__pagination-arrow blog__pagination-arrow-next">
              <svg
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.534 0.753906L21.0593 2.42212L34.0303 13.8881H0V16.1147H34.0303L21.0593 27.5806L22.534 29.2489L38 15.5774V14.4254L22.534 0.753906Z"
                  fill="#353535"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
