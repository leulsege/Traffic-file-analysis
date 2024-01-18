import { useState } from "react";
import styles from "./AppNav.module.css";
import { Link, useNavigate } from "react-router-dom";

function AppNav() {
  const [driverName, setDriverName] = useState("");
  const navigate = useNavigate();

  const handleDriver = () => {
    navigate("/drivers");
  };

  const handleVehicle = () => {
    navigate("/vehicles");
  };

  const handleRecord = () => {
    navigate("/accidents");
  };

  const handleTraining = () => {
    navigate("/trainings");
  };
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
        <div onClick={handleDriver} className={styles.item}>
          <p>አሽከርካሪ መመዝገቢያ</p>
        </div>
        <div onClick={handleVehicle} className={styles.item}>
          <p>ተሽከርካሪ መመዝገቢያ</p>
        </div>
        <div onClick={handleRecord} className={styles.item}>
          <p>ሪከርድ መመዝገቢያ</p>
        </div>
        <div onClick={handleTraining} className={styles.item}>
          <p>ስልጠና መመዝገቢያ</p>
        </div>
        <div onClick={handleDriver} className={styles.item}>
          <p>ስልጠና መመዝገቢያ</p>
        </div>
        <div onClick={handleDriver} className={styles.item}>
          <p>ስልጠና መመዝገቢያ</p>
        </div>
      </div>
    </>
  );
}

export default AppNav;
