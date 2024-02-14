import { useNavigate, useParams } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import ConfirmationPrompt from "./ConfirmationPrompt";
import CustomSnackbar from "./CustomSnackBar";

function VehicleForm({ vehicle, setVehicle }: any) {
  const [bmServiceTime, setBmServiceTime] = useState(vehicle.bmServiceTime);
  const [pmServiceTime, setPmServiceTime] = useState(vehicle.pmServiceTime);
  const [vehicleType, setVehicleType] = useState(vehicle.vehicleType);
  const [sideNumber, setSideNumber] = useState(vehicle.sideNumber);
  const [moterNumber, setMoterNumber] = useState(vehicle.moterNumber);
  const [chanciNumber, setChanciNumber] = useState(vehicle.chanciNumber);
  const [plateNumber, setPlateNumber] = useState(vehicle.plateNumber);
  const [others, setOthers] = useState(vehicle.others);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  const vehicleId = useParams();
  const navigate = useNavigate();

  async function handleUpdate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/vehicles/${vehicleId.id}`,
        {
          method: "PATCH",
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
        const vehicleInfo = await response.json();
        setVehicle(vehicleInfo.data.vehicle);
        setSnackbarMessage("Vehicle Updated Successfully!");
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
      console.error("Error fetching vehicle:", error);
    }
  }

  async function handleDelete() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/vehicles/${vehicleId.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        navigate("/vehicles");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
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
            onChange={(e) => setVehicleType(e.target.value)}
            value={vehicleType}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">የተሽከርካሪው ታርጋ ቁጥር</label>
          <input
            type="text"
            id="plateNumber"
            onChange={(e) => setPlateNumber(e.target.value)}
            value={plateNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="string">የሞተር ቁጥር</label>
          <input
            type="tel"
            id="moterNumber"
            onChange={(e) => setMoterNumber(e.target.value)}
            value={moterNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="string">የቻንሲ ቁጥር</label>
          <input
            type="tel"
            id="moterNumber"
            onChange={(e) => setChanciNumber(e.target.value)}
            value={chanciNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የጎን ቁጥርስ</label>
          <input
            type="text"
            id="sideNumber"
            onChange={(e) => setSideNumber(e.target.value)}
            value={sideNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Bm ሰርቪስ ጊዜ</label>
          <input
            type="number"
            id="bmServiceTime"
            onChange={(e) => setBmServiceTime(e.target.value)}
            value={bmServiceTime}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Pm ሰርቪስ ጊዜ</label>
          <input
            type="number"
            id="pmServiceTime"
            onChange={(e) => setPmServiceTime(e.target.value)}
            value={pmServiceTime}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ሌላ</label>
          <input
            type="text"
            id="others"
            onChange={(e) => setOthers(e.target.value)}
            value={others}
          />
        </div>

        <div className={styles.buttons}>
          <div>
            <button className={styles.updbtn} onClick={handleUpdate}>
              Update Vehicle
            </button>
            <CustomSnackbar
              open={showSnackbar}
              onClose={handleSnackbarClose}
              message={snackbarMessage}
              severity={snackbarSeverity}
            />
          </div>
          <ConfirmationPrompt
            onConfirm={handleDelete}
            onCancel={() => console.log("Deletion canceled")}
          >
            <button className={styles.delbtn}>Delete Vehicle</button>
          </ConfirmationPrompt>
        </div>
      </form>
    </main>
  );
}

export default VehicleForm;
