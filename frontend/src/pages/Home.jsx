import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/ourPolicy";
import NewslatterBox from "../components/NewslatterBox";

const Home = () => {
  return <div>
    <Hero />
    <LatestCollection />
    <BestSeller />
    <OurPolicy />
    <NewslatterBox />


  </div>;
};

export default Home;