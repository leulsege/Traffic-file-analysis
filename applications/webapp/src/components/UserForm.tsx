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
  const [commencementDate, setCommencementDate] = useState(
    driver.commencementDate.split("T")[0]
  );
  const [birthDate, setBirthDate] = useState(driver.birthDate);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [givenPoint, setGivenPoint] = useState(driver.givenPoint);
  const [gender, setGender] = useState(driver.gender);
  const [licenseExpiredDate, setlicenseExpiredDate] = useState(
    driver.licenseExpiredDate
  );
  const [PlateNumber, setPlateNumber] = useState(driver.vehicle.plateNumber);
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">ሙሉ ስም</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">ጾታ</label>
          <input
            type="text"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">የትውልድ ቀን</label>
          <input
            type="date"
            id="birthDate"
            onChange={(e) => setBirthDate(e.target.value)}
            value={birthDate}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የመንጃ ፍቃድ ደረጃ</label>
          <input
            type="text"
            id="licenselevel"
            onChange={(e) => setLicenseLevel(e.target.value)}
            value={licenseLevel}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የመንጃ ፍቃድ ቁጥር</label>
          <input
            type="text"
            id="licenseNumber"
            onChange={(e) => setLicenseNumber(e.target.value)}
            value={licenseNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">መንጃ ፍቃድ የሚያበቃበት ቀን</label>
          <input
            type="date"
            id="licenseExpiredDate"
            onChange={(e) => setlicenseExpiredDate(e.target.value)}
            value={licenseExpiredDate}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">መለያ ቁጥር</label>
          <input
            type="text"
            id="idNumber"
            onChange={(e) => setIdNumber(e.target.value)}
            value={idNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">ስልክ ቁጥር</label>
          <input
            type="tel"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="number">የቅጥር ዘመን</label>
          <input
            type="date"
            id="commencementDate"
            onChange={(e) => setCommencementDate(e.target.value)}
            value={commencementDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">የተሰጠው ነጥብ</label>
          <input
            type="text"
            id="givenPoint"
            onChange={(e) => setGivenPoint(e.target.value)}
            value={givenPoint}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">የሚነዳው መኪና ታርጋ ቁጥር</label>
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
