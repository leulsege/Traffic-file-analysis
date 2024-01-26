import styles from "./LoggedinNavBar.module.css";
import { NavLink } from "react-router-dom";
import Logo1 from "./Logo1";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo1 />
      <ul>
        <li>
          <NavLink to="/profile" className={styles.ctaLink}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
