import React from "react";
import MainSection from "./mainSection/MainSection";
import SideBar from "./sideBar/SideBar";
import NavBar from "./mainSection/NavBar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SideBar />
      <MainSection />
    </div>
  );
};

export default LandingPage;
