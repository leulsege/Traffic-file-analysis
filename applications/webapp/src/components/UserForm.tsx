import { Link } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";

function UserForm({ driver }) {
  const [licenseLevel, setLicenseLevel] = useState(driver.licenseLevel);
  const [fullName, setFullName] = useState(driver.name);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);
  const [idNumber, setIdNumber] = useState(driver.idNumber);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [PlateNumber, setPlateNumber] = useState(driver.vehicle[0].plateNumber);
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">First Name</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">License Level</label>
          <input
            type="text"
            id="licenselevel"
            onChange={(e) => setLicenseLevel(e.target.value)}
            value={licenseLevel}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">License Number</label>
          <input
            type="text"
            id="licenseNumber"
            onChange={(e) => setLicenseNumber(e.target.value)}
            value={licenseNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">id Number</label>
          <input
            type="text"
            id="idNumber"
            onChange={(e) => setIdNumber(e.target.value)}
            value={idNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Vehicle plate Number</label>
          <input
            type="text"
            id="plateNumber"
            onChange={(e) => setPlateNumber(e.target.value)}
            value={PlateNumber}
          />
        </div>

        <div className={styles.buttons}>
          <Link className={styles.ctaLink}>Save Profile</Link>
          <button className={styles.delbtn}>Delete Driver</button>
        </div>
      </form>
    </main>
  );
}

export default UserForm;
