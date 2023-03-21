import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import Logo from "../images/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav__links"></ul>
        nav buttons
      </div>
    </nav>
  );
};

export default Navbar;
