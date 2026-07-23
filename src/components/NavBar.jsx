import { Link } from "react-router";
import "./NavBar.css";

function NavBar() {

  return (
    <>
      <nav className="nav">
        <Link to="/">Home Page</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}
export default NavBar;