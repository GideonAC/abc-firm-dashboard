import React from "react";
import uploaded from "../images/uploadedPanel.svg";
import transcribed from "../images/transcribedPanel.svg";
import saved from "../images/savedPanel.svg";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-box">
        <img className="panel-img" src={uploaded} alt="" />
        <p className="numbers">100</p>
        <p className="panel-text">Uploaded Files</p>
      </div>

      <div className="panel-box">
        <img className="panel-img" src={transcribed} alt="" />
        <p className="numbers">50</p>
        <p className="panel-text">Transcribed</p>
      </div>

      <div className="panel-box">
        <img className="panel-img" src={saved} alt="" />
        <p className="numbers">20</p>
        <p className="panel-text">Saved</p>
      </div>
    </div>
  );
};

export default Panel;
