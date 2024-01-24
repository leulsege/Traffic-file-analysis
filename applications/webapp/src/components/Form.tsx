import { Link, useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState();
  const [gender, setGender] = useState();
  const [licenseLevel, setLicenseLevel] = useState();
  const [licenseNumber, setLicenseNumber] = useState();
  const [licenseExpiredDate, setLicenseExpiredDate] = useState();
  const [idNumber, setIdNumber] = useState();
  const [birthDate, setBirthDate] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [vehicle, setVehicle] = useState();

  const navigate = useNavigate();

  async function handleCreate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/drivers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            phoneNumber,
            gender,
            birthDate,
            licenseLevel,
            licenseNumber,
            licenseExpiredDate,
            idNumber,
            vehicle,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const driver = await response.json();
        console.log(driver);
        navigate(`/drivers/${driver.data.driver._id}`);
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
          <label htmlFor="text">Full Name</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
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
          <label htmlFor="number">License Expired Date</label>
          <input
            type="Date"
            id="licenseExpiredDate"
            onChange={(e) => setLicenseExpiredDate(e.target.value)}
            value={licenseExpiredDate}
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
          <label htmlFor="number">Vehicle plate Number</label>
          <input
            type="text"
            id="vehicle"
            onChange={(e) => setVehicle(e.target.value)}
            value={vehicle}
          />
        </div>

        <div>
          <button className={styles.crtbtn} onClick={handleCreate}>
            Add Driver
          </button>
        </div>
      </form>
    </main>
  );
}

export default Form;
