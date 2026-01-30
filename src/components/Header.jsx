import STL from "../assets/stl.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header flex justify-between">
      <img className="logo w-1/5 ml-2" src={STL} alt="STL Logo" />
      <div className="flex w-1/2 justify-around items-center">
        <Link
          to="/"
          className="hover-text-green transition-colors cursor-pointer h-full flex items-center"
        >
          Home
        </Link>
        <Link
          to="/inventory"
          className="hover-text-green transition-colors cursor-pointer h-full flex items-center"
        >
          Inventory
        </Link>
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="hover-text-green transition-colors cursor-pointer select-none">
            TOOL BOX
            <div
              className={`absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-10 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/steel-properties"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Steel Properties
              </Link>
              <Link
                to="/unit-converter"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Unit Converter
              </Link>
            </div>
          </span>
        </div>
        <Link
          to="/about"
          className="hover-text-green transition-colors cursor-pointer "
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover-text-green transition-colors cursor-pointer h-full flex items-center"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
