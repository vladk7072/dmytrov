import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BlogPage } from "./pages/BlogPage";
import { BlogNewPage } from "./pages/BlogNewPage";
import { IndexPage } from "./pages/IndexPage";
import { ServicesPage } from "./pages/ServicesPage";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<IndexPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/*" element={<BlogNewPage />} />
          <Route path="/services/*" element={<ServicesPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
