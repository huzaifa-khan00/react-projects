import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to={"/"} className="navbar-link">Home Page</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to={"/about"} className="navbar-link">About</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to={"/products"} className="navbar-link">Products</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to={"/product"} className="navbar-link">Product</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;