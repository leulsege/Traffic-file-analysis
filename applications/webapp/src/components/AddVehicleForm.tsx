import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import Spinner from "./Spinner";

function AddVehicleForm() {
  const [bmServiceTime, setBmServiceTime] = useState();
  const [pmServiceTime, setPmServiceTime] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [sideNumber, setSideNumber] = useState();
  const [moterNumber, setMoterNumber] = useState();
  const [chanciNumber, setChanciNumber] = useState();
  const [plateNumber, setPlateNumber] = useState();
  const [others, setOthers] = useState();

  const vehicleId = useParams();
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
          <label htmlFor="text">Vehicle Type</label>
          <input
            type="text"
            id="vehicleType"
            onChange={(e) => setVehicleType(e.target.value)}
            value={vehicleType}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Vehicle plate Number</label>
          <input
            type="text"
            id="plateNumber"
            onChange={(e) => setPlateNumber(e.target.value)}
            value={plateNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="string">Motor Number</label>
          <input
            type="tel"
            id="moterNumber"
            onChange={(e) => setMoterNumber(e.target.value)}
            value={moterNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="string">Chanci Number</label>
          <input
            type="tel"
            id="moterNumber"
            onChange={(e) => setChanciNumber(e.target.value)}
            value={chanciNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Side Number</label>
          <input
            type="text"
            id="sideNumber"
            onChange={(e) => setSideNumber(e.target.value)}
            value={sideNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Bm Service Time</label>
          <input
            type="number"
            id="bmServiceTime"
            onChange={(e) => setBmServiceTime(e.target.value)}
            value={bmServiceTime}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="number">Pm Service Time</label>
          <input
            type="number"
            id="pmServiceTime"
            onChange={(e) => setPmServiceTime(e.target.value)}
            value={pmServiceTime}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">others</label>
          <input
            type="text"
            id="others"
            onChange={(e) => setOthers(e.target.value)}
            value={others}
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.updbtn} onClick={handleCreate}>
            Add Vehicle
          </button>
          <div></div>
        </div>
      </form>
    </main>
  );
}

export default AddVehicleForm;
