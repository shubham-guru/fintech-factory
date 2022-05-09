import React from "react";
import CryptoMarquee from "./CryptoMarquee";
import { FirstSection } from "./FirstSection";
import FivthSection from "./FivthSection";
import FourthSection from "./FourthSection";
import SlideShow from "./SlideShow";
// import ThirdSection from "./ThirdSection";
// import Maintenance from "./Maintenance";

const Home = () => {
  return (
    <div>
      {/* <Maintenance /> */}
      <SlideShow />
      <FirstSection />
      <FourthSection />
      <FivthSection />
      <CryptoMarquee />
    </div>
  );
};

export default Home;
