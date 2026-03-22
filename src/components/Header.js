import Logo from "./Logo";
import { Link } from "react-router-dom";
// import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="flex justify-between bg-black rounded-4xl m-4">
      <div className="w-[90px]">
        <Logo />
      </div>
      <div>
        <ul className="flex gap-10 m-8 text-white ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/exp">Experience</Link>
          </li>
          <button>Download CV</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
