import { useNavigate, useParams } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import ConfirmationPrompt from "./ConfirmationPrompt";
import CustomSnackbar from "./CustomSnackBar";

function UserForm({ driver, setDriver }: any) {
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
  const [vehicle, setVehicle] = useState(driver.vehicle?.plateNumber);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };
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
            vehicle,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const driverInfo = await response.json();
        setDriver(driverInfo.data.driver);
        setSnackbarMessage("Driver Updated Successfully!");
        setSnackbarSeverity("success");
        setShowSnackbar(true);
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.message);
        setSnackbarSeverity("error");
        setShowSnackbar(true);
        console.log(errorData);
      }
    } catch (error) {
      setSnackbarMessage("unknown error");
      setSnackbarSeverity("success");
      setShowSnackbar(true);
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
        navigate("/exdrivers");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching driver:", error);
    }
  }

  async function handleRecover() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/drivers/${driverId.id}`,
        {
          method: "PUT",
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
          <label htmlFor="text">ጾታ</label>
          <input
            type="date"
            id="commencementDate"
            onChange={(e) => setCommencementDate(e.target.value)}
            value={commencementDate}
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
          <label htmlFor="number">የሚነዳው መኪና ታርጋ ቁጥር</label>
          <input
            type="text"
            id="vehicle"
            onChange={(e) => setVehicle(e.target.value)}
            value={vehicle}
          />
        </div>

        <div className={styles.buttons}>
          <div>
            <button className={styles.updbtn} onClick={handleUpdate}>
              Save Profile
            </button>
            <CustomSnackbar
              open={showSnackbar}
              onClose={handleSnackbarClose}
              message={snackbarMessage}
              severity={snackbarSeverity}
            />
          </div>
          {driver.active ? (
            <ConfirmationPrompt
              onConfirm={handleDelete}
              onCancel={() => console.log("Deletion canceled")}
            >
              <button className={styles.delbtn}>Delete Driver</button>
            </ConfirmationPrompt>
          ) : (
            <ConfirmationPrompt
              onConfirm={handleRecover}
              onCancel={() => console.log("Deletion canceled")}
            >
              <button className={styles.delbtn}>&larr; Recover</button>
            </ConfirmationPrompt>
          )}
        </div>
      </form>
    </main>
  );
}

export default UserForm;
