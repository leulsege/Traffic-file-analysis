import styles from "./Logo1.module.css";
import { Link } from "react-router-dom";

function Logo1() {
  return (
    <Link to="/" className={styles.logoContainer}>
      <img src="PSTS-LOGO.png" className={styles.logo} />
      <div>
        <h4 className={styles.amharic}>የፐብሊክ ሰርቪስ ትራንስፖርት አገልግሎት</h4>
        <h4>Public Service Transporpt Service</h4>
      </div>
    </Link>
  );
}

export default Logo1;
