/* eslint-disable @next/next/no-img-element */
import React from "react";
import About from "./sections/About";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import Mint from "./sections/Mint";
import Roadmap from "./sections/Roadmap";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <About />
      <Mint />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
