import { useNavigate } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import CustomSnackbar from "./CustomSnackBar";

function AddVehicleForm() {
  const [bmServiceTime, setBmServiceTime] = useState();
  const [pmServiceTime, setPmServiceTime] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [sideNumber, setSideNumber] = useState();
  const [moterNumber, setMoterNumber] = useState();
  const [chanciNumber, setChanciNumber] = useState();
  const [plateNumber, setPlateNumber] = useState();
  const [others, setOthers] = useState();
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
        `${import.meta.env.VITE_BACKEND_API}/vehicles`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            vehicleType,
            plateNumber,
            moterNumber,
            chanciNumber,
            sideNumber,
            pmServiceTime,
            bmServiceTime,
            others,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const vehicle = await response.json();
        navigate(`/vehicles/${vehicle.data.vehicle._id}`);
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
      console.error("Error fetching vehicle:", error);
    }
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="text">የተሽከርካሪው አይነት</label>
          <input
            type="text"
            id="vehicleType"
            onChange={(e) => setVehicleType(e.target.value as any)}
            value={vehicleType}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">የተሽከርካሪው ታርጋ ቁጥር</label>
          <input
            type="text"
            id="plateNumber"
            onChange={(e) => setPlateNumber(e.target.value as any)}
            value={plateNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="string">የሞተር ቁጥር</label>
          <input
            type="tel"
            id="moterNumber"
            onChange={(e) => setMoterNumber(e.target.value as any)}
            value={moterNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="string">የቻንሲ ቁጥር</label>
          <input
            type="tel"
            id="moterNumber"
            onChange={(e) => setChanciNumber(e.target.value as any)}
            value={chanciNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የጎን ቁጥርስ</label>
          <input
            type="text"
            id="sideNumber"
            onChange={(e) => setSideNumber(e.target.value as any)}
            value={sideNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Bm ሰርቪስ ጊዜ</label>
          <input
            type="number"
            id="bmServiceTime"
            onChange={(e) => setBmServiceTime(e.target.value as any)}
            value={bmServiceTime}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Pm ሰርቪስ ጊዜ</label>
          <input
            type="number"
            id="pmServiceTime"
            onChange={(e) => setPmServiceTime(e.target.value as any)}
            value={pmServiceTime}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ሌላ</label>
          <input
            type="text"
            id="others"
            onChange={(e) => setOthers(e.target.value as any)}
            value={others}
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.updbtn} onClick={handleCreate}>
            Add Vehicle
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

export default AddVehicleForm;
