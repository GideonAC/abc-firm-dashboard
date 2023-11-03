import NavBar from "./NavBar";

import React from "react";
import User from "./User";
import Panel from "./Panel";
import Table from "./Table";

const MainSection = () => {
  return (
    <div className="mainSection">
      <NavBar />
      <User />
      <Panel />
      <Table />
    </div>
  );
};

export default MainSection;
