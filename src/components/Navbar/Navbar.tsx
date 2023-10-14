import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <nav>
        <button className="baby-btn">
          <NavLink to="/baby-dashboard">Baby List</NavLink>
        </button>
        <button className="coding-btn">
          <NavLink to="/coding-dashboard">Coding List</NavLink>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
