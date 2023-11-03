import NavBar from "./NavBar";
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
