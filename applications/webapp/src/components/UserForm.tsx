import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import Spinner from "./Spinner";

function UserForm({ driver, setDriver }) {
  const [fullName, setFullName] = useState(driver.name);
  const [gender, setGender] = useState(driver.gender);
  const [licenseLevel, setLicenseLevel] = useState(driver.licenseLevel);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);
  const [licenseExpiredDate, setLicenseExpiredDate] = useState(
    driver.licenseExpiredDate
  );
  const [idNumber, setIdNumber] = useState(driver.idNumber);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [PlateNumber, setPlateNumber] = useState(driver.vehicle[0].plateNumber);

  const driverId = useParams();
  const navigate = useNavigate();

  async function handleUpdate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/drivers/${driverId.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            phoneNumber,
            gender,
            licenseLevel,
            licenseNumber,
            licenseExpiredDate,
            idNumber,
            PlateNumber,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const driverInfo = await response.json();
        setDriver(driverInfo.data.driver);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching driver:", error);
    }
  }

  async function handleDelete() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/drivers/${driverId.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        navigate("/drivers");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching driver:", error);
    }
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="text">መሉ ስም</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
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
          <label htmlFor="text">ጾታ</label>
          <input
            type="text"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የመንጃ ፈቃድ ደረጃ</label>
          <input
            type="text"
            id="licenselevel"
            onChange={(e) => setLicenseLevel(e.target.value)}
            value={licenseLevel}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የመንጃ ፈቃድ ቁጥር</label>
          <input
            type="text"
            id="licenseNumber"
            onChange={(e) => setLicenseNumber(e.target.value)}
            value={licenseNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">መንጃ ፍቃድ የሚያበቃበት ቀን</label>
          <input
            type="Date"
            id="licenseExpiredDate"
            onChange={(e) => setLicenseExpiredDate(e.target.value)}
            value={licenseExpiredDate}
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
          <label htmlFor="number">የሚያሽከረክረው ሰሌዳ ቁጥር</label>
          <input
            type="text"
            id="plateNumber"
            onChange={(e) => setPlateNumber(e.target.value)}
            value={PlateNumber}
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.updbtn} onClick={handleUpdate}>
            Save Profile
          </button>
          <button className={styles.delbtn} onClick={handleDelete}>
            Delete Driver
          </button>
        </div>
      </form>
    </main>
  );
}

export default UserForm;
