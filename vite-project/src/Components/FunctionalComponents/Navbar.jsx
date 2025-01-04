import "../../assets/css/NavBar.css";
import { Link } from "react-router-dom";
var NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link" target="_blank">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/use-effect" className="link">
              UseEffect
            </Link>
          </li>
          <li>
            <Link to="/use-ref" className="link">
              UseRef
            </Link>
          </li>
          <li>
            <Link to="/use-context" className="link">
              UseContext
            </Link>
          </li>
          <li>
            <Link to="/use-memo" className="link">
              UseMemo
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;