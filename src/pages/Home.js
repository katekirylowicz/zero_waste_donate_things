import React from "react";

import HomeHeader from "../components/HomeHeader";
import HomeThreeColumns from "../components/HomeThreeColumns";
import HomeAppRules from "../components/HomeAppRules";
import HomeAboutUs from "../components/HomeAboutUs";
import WhoWeHelp from "../components/WhoWeHelp";
import HomeContact from "../components/HomeContact";

const Home = () => {


  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeAppRules />
      <HomeAboutUs />
      <WhoWeHelp />
      <HomeContact />
    </>
  );


}

export default Home;

