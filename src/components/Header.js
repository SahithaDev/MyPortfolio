import Logo from "./Logo";
// import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="flex justify-between bg-black rounded-4xl m-4">
      <div className="w-[90px]">
        <Logo />
      </div>
      <div>
        <ul className="flex gap-10 m-8 text-white ">
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Experience</li>
          <button>Download CV</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
