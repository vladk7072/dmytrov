import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BlogPage } from "./pages/BlogPage";
import { BlogNewPage } from "./pages/BlogNewPage";
import { IndexPage } from "./pages/IndexPage";
import { ServicesPage } from "./pages/ServicesPage";
import { CreatePage } from "./pages/CreatePage";
import { Register } from "./pages/Register";
import { MyAccountPage } from "./pages/MyAccountPage";
import { WorksheetPage } from "./pages/WorksheetPage";
import { QuestionPage } from "./pages/QuestionsPage";
import "./styles/app.scss";
import "./styles/media.scss";
import { ContactsPage } from "./pages/ContactsPage";
import { AllServices } from "./pages/AllServices";

function App() {
  const [visibleUp, setVisibleUp] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 1000) {
        setVisibleUp(true);
      } else {
        setVisibleUp(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="up"></div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<IndexPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/*" element={<BlogNewPage />} />
          <Route path="/services" element={<Navigate to="standart" />} />
          <Route path="/services/*" element={<ServicesPage />} />
          <Route path="/services/all" element={<AllServices />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<MyAccountPage />} />
          <Route path="/worksheet" element={<WorksheetPage />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
      <Footer />
      <a className={visibleUp ? "up up--active" : "up"} href="#up">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_223_4557)">
            <path
              d="M3.75195 12.21L5.06896 13.3742L14.1211 3.13395L14.1211 30L15.8789 30L15.8789 3.13395L24.931 13.3742L26.248 12.21L15.4547 1.3958e-06L14.5452 1.43556e-06L3.75195 12.21Z"
              fill="#545454"
            />
          </g>
          <defs>
            <clipPath id="clip0_223_4557">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="translate(0 30) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    </>
  );
}

export default App;
