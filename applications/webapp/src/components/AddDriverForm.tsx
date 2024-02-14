import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";
import CustomSnackbar from "./CustomSnackBar";

function AddDriverForm() {
  const [fullName, setFullName] = useState();
  const [gender, setGender] = useState();
  const [licenseLevel, setLicenseLevel] = useState();
  const [licenseNumber, setLicenseNumber] = useState();
  const [licenseExpiredDate, setLicenseExpiredDate] = useState();
  const [idNumber, setIdNumber] = useState();
  const [birthDate, setBirthDate] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [vehicle, setVehicle] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

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
        navigate(`/drivers/${driver.data.driver._id}`);
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

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="text">ሙሉ ስም</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value as any)}
            value={fullName}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="number">ስልክ ቁጥር</label>
          <input
            type="tel"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value as any)}
            value={phoneNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ጾታ</label>
          <input
            type="text"
            id="gender"
            onChange={(e) => setGender(e.target.value as any)}
            value={gender}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">የትውልድ ቀን</label>
          <input
            type="date"
            id="birthDate"
            onChange={(e) => setBirthDate(e.target.value as any)}
            value={birthDate}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የመንጃ ፈቃድ ደረጃ</label>
          <input
            type="text"
            id="licenselevel"
            onChange={(e) => setLicenseLevel(e.target.value as any)}
            value={licenseLevel}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የመንጃ ፈቃድ ቁጥር</label>
          <input
            type="text"
            id="licenseNumber"
            onChange={(e) => setLicenseNumber(e.target.value as any)}
            value={licenseNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">መንጃ ፈቃድ የሚያበቃበት ቀን</label>
          <input
            type="Date"
            id="licenseExpiredDate"
            onChange={(e) => setLicenseExpiredDate(e.target.value as any)}
            value={licenseExpiredDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">መለያ ቁጥር</label>
          <input
            type="text"
            id="idNumber"
            onChange={(e) => setIdNumber(e.target.value as any)}
            value={idNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">የሚያሽከረክረው ታርጋ ቁጥር</label>
          <input
            type="text"
            id="vehicle"
            onChange={(e) => setVehicle(e.target.value as any)}
            value={vehicle}
          />
        </div>

        <div>
          <button className={styles.crtbtn} onClick={handleCreate}>
            Add Driver
          </button>
          <CustomSnackbar
            open={showSnackbar}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
            severity={snackbarSeverity}
          />
        </div>
      </form>
    </main>
  );
}

export default AddDriverForm;
