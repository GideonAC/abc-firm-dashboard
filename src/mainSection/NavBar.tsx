import featuredIcon from "../images/featured-icon.svg";
import profile from "../images/frame.svg";
// import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="navbar">
          <div className="search">
            {/* <BsSearch /> */}
            <input
              className="input-search"
              type="text"
              placeholder="search here..."
            />
          </div>

          <div className="icons">
            <img src={featuredIcon} alt="featuredIcon" />
            <img src={profile} alt="profile" className="profile-pic" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
