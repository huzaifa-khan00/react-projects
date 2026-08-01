import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home Page</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>Products</NavLink>
          </li>
          <li>
            <NavLink to={'/product'}>Product</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;