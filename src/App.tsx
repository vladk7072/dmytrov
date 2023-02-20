import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import { IndexSlide } from "./components/IndexSlider";
import { Questions } from "./components/index/Questions";
import { Rates } from "./components/index/Rates";
import { Index } from "./pages/Index";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        {/* <Index /> */}
        {/* <IndexSlide /> */}
        <Rates />
        {/* <Questions /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
