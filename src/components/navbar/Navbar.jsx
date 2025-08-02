import "./navbar.css";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/bytecraftlogo.png";
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
      <Link 
        className="logo-container"
        to="/"
      >
        <img
          src={logo}
          alt="Logo image of ByteCraft Savannah"
          className="logo-image"
        />
        <span>ByteCraft</span>
      </Link>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {mobileOpen ? (
          <RxCross1 color="#b4724a" size={24} />
        ) : (
          <CiMenuFries color="#b4724a" size={24} />
        )}
      </div>

      <ul className={`links nav-links ${mobileOpen ? "active" : ""}`}>
        <li onClick={closeMenu}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/services">Services</Link>
        </li>

        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <ul className={`links social-links ${mobileOpen ? "active" : ""}`}>
        <li>
          <FaWhatsapp size={25} />
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
