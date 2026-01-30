import STL from "../assets/stl.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex justify-between">
      <img className="logo w-1/5 ml-2" src={STL} alt="STL Logo" />
      <div className="flex w-1/2 justify-around items-center">
        <Link
          to="/"
          className="hover-text-green transition-colors cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/inventory"
          className="hover-text-green transition-colors cursor-pointer"
        >
          Inventory
        </Link>
        <Link
          to="/toolbox"
          className="hover-text-green transition-colors cursor-pointer"
        >
          TOOL BOX
        </Link>
        <Link
          to="/about"
          className="hover-text-green transition-colors cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover-text-green transition-colors cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
