import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
