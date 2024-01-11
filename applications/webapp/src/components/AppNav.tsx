import { useState } from "react";
import styles from "./AppNav.module.css";
import { Link } from "react-router-dom";

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
          <p>አሽከርካሪ መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <p>ተሽከርካሪ መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <p>ሪከርድ መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <p>ስልጠና መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <p>ስልጠና መመዝገቢያ</p>
        </div>
        <div className={styles.item}>
          <p>ስልጠና መመዝገቢያ</p>
        </div>
      </div>
    </>
  );
}

export default AppNav;
