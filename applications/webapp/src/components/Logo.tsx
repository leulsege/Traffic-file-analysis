import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={styles.logoContainer}>
      <img src="/PSTS-LOGO.png" className={styles.logo} />
      <div>
        <h4 className={styles.amharic}>የፐብሊክ ሰርቪስ ትራንስፖርት አገልግሎት</h4>
        <h4 className={styles.English}>Public Service Transporpt Service</h4>
      </div>
    </Link>
  );
}

export default Logo;
