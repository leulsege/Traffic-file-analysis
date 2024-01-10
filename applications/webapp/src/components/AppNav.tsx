import { useState } from "react";
import styles from "./AppNav.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

function AppNav() {
  const [driverName, setDriverName] = useState("");
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.row}>
          <input
            type="text"
            id="driverNameSearch"
            onChange={(e) => setDriverName(e.target.value)}
            value={driverName}
          />
          <Link className={styles.ctaLink}>አሽከርካሪ ፈልግ</Link>
        </div>
      </nav>

      <div className={styles.grid}>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faBus} />
          <p>አሽከርካሪ መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faBus} />
          <p>ተሽከርካሪ መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faBus} />
          <p>ሪከርድ መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faBus} />
          <p>ስልጠና መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faBus} />
          <p>ስልጠና መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faBus} />
          <p>ስልጠና መመዝገቢያ</p>
        </div>
      </div>
    </>
  );
}

export default AppNav;
