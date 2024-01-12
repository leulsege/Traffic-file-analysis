import { Link } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";

function UserForm({ driver }) {
  // PRE-FILL FOR DEV PURPOSES
  const [licenseLevel, setLicenseLevel] = useState(driver.licenseLevel);
  const [firstName, setFirstName] = useState(driver.firstName);
  const [lastName, setLastName] = useState(driver.lastName);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);
  const [idNumber, setIdNumber] = useState(driver.idNumber);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [PlateNumber, setPlateNumber] = useState(driver.vehicle.plateNumber);
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
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

        <div>
          <Link className={styles.ctaLink}>Save Profile</Link>
        </div>
      </form>
    </main>
  );
}

export default UserForm;
