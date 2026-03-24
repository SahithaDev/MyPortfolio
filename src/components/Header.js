import Logo from "./Logo";
import { Link, Element } from "react-scroll";
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
            <Link to="body" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About me
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="exp" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <button>Download CV</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
