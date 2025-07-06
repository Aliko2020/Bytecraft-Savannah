import "./navbar.css"
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import Bytelogo from "../../assets/Bytelogo3.jpeg"
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);
  const closeMenu = () => setMobileOpen(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="nav-container">
      <span className="logo">
        <span className="B">B</span>yteCraft{" "}
        <span>
          <span className="B">S</span>avannah
        </span>
      </span>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {mobileOpen ? <RxCross1 color="#b4724a" size={24} /> : <CiMenuFries color="#b4724a" size={24} />}
      </div>

      <ul className={`links nav-links ${mobileOpen ? "active" : ""}`}>
        <li onClick={closeMenu}>Home</li>
        <li onClick={closeMenu}>About</li>
        <li onClick={closeMenu}>Contact</li>
        <li
          className={`dropdown ${dropdownOpen ? "open" : ""}`}
          onClick={handleDropdownClick}
        >
          Services
          <ul className="dropdown-menu">
            <li onClick={closeMenu}>Laptops</li>
            <li onClick={closeMenu}>Training</li>
            <li onClick={closeMenu}>Support</li>
          </ul>
        </li>
        <li>Blog</li>
      </ul>

      <ul className={`links social-links ${mobileOpen ? "active" : ""}`}>
        <li>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} color="gray" /> Chat
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
