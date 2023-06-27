import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">StefBooking.com</span>
        </Link>
        <div className="navItems">
          <button className="navButton">S'inscrire</button>
          <button className="navButton">Se connecter</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
