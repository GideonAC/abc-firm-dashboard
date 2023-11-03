import React from "react";
import SideIcons from "./sideIcons/SideIcons";

import upgrade from "../images/upgrade.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="logo">
        <div className="firm-name">
          <h1>abc firm</h1>
        </div>
        <SideIcons />
      </div>

      <div className="upgrade-box">
        <img src={upgrade} alt="" className="upgrade-pic" />
        <p className="upgrade-acc">Upgrade Account</p>
        <p className="unlimited">Access to Unlimited Transcription</p>
        <button className="upgrade-btn"> Upgrade</button>
      </div>
    </div>
  );
};

export default SideBar;
