import { Link } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import { useStepContext } from "@mui/material";

function UserForm({ driver }) {
  // PRE-FILL FOR DEV PURPOSES
  const [licenseLevel, setLicenseLevel] = useState(driver.licenseLevel);
  const [name, setName] = useState(driver.firstName);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);
  const [idNumber, setIdNumber] = useState(driver.idNumber);
  const [birthDate, setBirthDate] = useState(driver.birthDate);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [gender, setGender] = useState(driver.gender);
  const [licenseExpiredDate, setlicenseExpiredDate] = useState(
    driver.licenseExpiredDate
  );
  const [PlateNumber, setPlateNumber] = useState(driver.vehicle.plateNumber);
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">Full Name</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">Gender</label>
          <input
            type="text"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">BirthDate</label>
          <input
            type="date"
            id="birthDate"
            onChange={(e) => setBirthDate(e.target.value)}
            value={birthDate}
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
          <label htmlFor="text">license Expired Date</label>
          <input
            type="date"
            id="licenseExpiredDate"
            onChange={(e) => setlicenseExpiredDate(e.target.value)}
            value={licenseExpiredDate}
            required
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
