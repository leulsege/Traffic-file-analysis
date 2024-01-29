import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import { useStepContext } from "@mui/material";
import Spinner from "./Spinner";

function UserForm({ driver, setDriver }) {
  const [fullName, setFullName] = useState(driver.fullName);
  const [gender, setGender] = useState(driver.gender);
  const [licenseLevel, setLicenseLevel] = useState(driver.licenseLevel);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);
  const [licenseExpiredDate, setLicenseExpiredDate] = useState(
    driver.licenseExpiredDate?.split("T")[0]
  );
  const [idNumber, setIdNumber] = useState(driver.idNumber);
  const [commencementDate, setCommencementDate] = useState(
    driver.commencementDate?.split("T")[0]
  );
  const [birthDate, setBirthDate] = useState(driver.birthDate?.split("T")[0]);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [givenPoint, setGivenPoint] = useState(driver.givenPoint);
  const [vehicle, setVehicle] = useState(driver.vehicle?.plateNumber);

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
            birthDate,
            commencementDate,
            licenseLevel,
            licenseNumber,
            licenseExpiredDate,
            idNumber,
            givenPoint,
            vehicle,
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
          <label htmlFor="text">ሙሉ ስም</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text"> ጾታ</label>
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
            id="vehicle"
            onChange={(e) => setVehicle(e.target.value)}
            value={vehicle}
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
