import React from "react";
import { IndexSlide } from "../components/index/IndexSlider";
import { Questions } from "../components/index/Questions";
import { Rates } from "../components/index/Rates";
import { Services } from "../components/index/Services";
import { Top } from "../components/index/Top";

export const IndexPage = () => {
  return (
    <>
      <Top />
      <IndexSlide />
      <Rates />
      <Services />
      <Questions />
    </>
  );
};
