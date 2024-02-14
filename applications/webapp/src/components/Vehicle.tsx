import { useNavigate } from "react-router";
import styles from "./Driver.module.css";

function Vehicles({ vehicle }: any) {
  const navigate = useNavigate();

  const handleVehicle = () => {
    navigate(vehicle._id);
  };
  return (
    <div className={styles.container} onClick={handleVehicle}>
      <img className={styles.driverImg} src="/vehicle.jpg" />
      <span className={styles.name}>{vehicle.plateNumber}</span>
    </div>
  );
}

export default Vehicles;
