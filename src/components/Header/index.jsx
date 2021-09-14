import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { HeaderTag, Logo } from "./view";

const Header = () => (
  <HeaderTag className="d-flex align-items-center justify-content-around">
    <Link to="/">
      <div className="d-flex align-items-center">
        <Logo src={logo} alt="logo-img" />
        <div className="ms-3 fs-3 fw-bold text-black">APSignals</div>
      </div>
    </Link>
    <div className="fs-4">Learn Coding for Free is not a Dream anymore!</div>
    <a className="btn btn-secondary fs-5" href="https://www.instagram.com/apsignal" target="/">
      Our Instagram
      <FaInstagram className="ms-3 fs-3" />
    </a>
  </HeaderTag>
);

export default Header;
