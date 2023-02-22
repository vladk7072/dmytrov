import React from "react";
import { IndexSlide } from "../components/index/IndexSlider";
import { Questions } from "../components/index/Questions";
import { Rates } from "../components/index/Rates";
import { Services } from "../components/index/Services";
import { Top } from "../components/index/Top";
import { ScrollToTopOnMount } from "../helpers/routerup";

export const IndexPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Top />
      <IndexSlide />
      <Rates />
      <Services />
      <Questions />
    </>
  );
};
