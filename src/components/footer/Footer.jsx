import "./footer.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="container">
        <div className="top-container">
          <p>@2025 ByteCraft</p>
          <ul>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
