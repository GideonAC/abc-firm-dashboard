import React from "react";
import home from "../../images/home.svg";
import allFiles from "../../images/allFiles.svg";
import saved from "../../images/saved.svg";
import integration from "../../images/integration.svg";
import trash from "../../images/trash.svg";
import settings from "../../images/settings.svg";
import help from "../../images/help.svg";

const sideIcons = () => {
  return (
    <div className="sideBar-middle">
      <div className="side-items">
        <div className="side-icons">
          <img src={home} alt="" />
        </div>
        <div className="side-name">
          <p>Home</p>
        </div>
      </div>

      <div className="side-items">
        <div className="side-icons">
          <img src={allFiles} alt="" />
        </div>
        <div className="side-name">
          <p>All Files</p>
        </div>
      </div>

      <div className="side-items">
        <div className="side-icons">
          <img src={saved} alt="" />
        </div>
        <div className="side-name">
          <p>Saved</p>
        </div>
      </div>

      <div className="side-items">
        <div className="side-icons">
          <img src={integration} alt="" />
        </div>
        <div className="side-name">
          <p>Integrations</p>
        </div>
      </div>

      <div className="side-items">
        <div className="side-icons">
          <img src={trash} alt="" />
        </div>
        <div className="side-name">
          <p>Trash</p>
        </div>
      </div>

      <div className="side-items">
        <div className="side-icons">
          <img src={settings} alt="" />
        </div>
        <div className="side-name">
          <p>Settings</p>
        </div>
      </div>

      <div className="side-items">
        <div className="side-icons">
          <img src={help} alt="" />
        </div>
        <div className="side-name">
          <p>Help and Support</p>
        </div>
      </div>
    </div>
  );
};

export default sideIcons;
