import styles from "./LoggedinNavBar.module.css";
import { NavLink } from "react-router-dom";

import LogoLoggedin from "./LogoLoggedin";

function LoggedinNavBar() {
  return (
    <nav className={styles.nav}>
      <LogoLoggedin />
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

export default LoggedinNavBar;
