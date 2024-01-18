import styles from "./Driver.module.css";

function Vehicles({ vehicle }) {
  console.log(vehicle);
  return (
    <div className={styles.container}>
      <img className={styles.driverImg} src="driver.jpg" />
      <span className={styles.name}>{vehicle.PlateNumber}</span>
    </div>
  );
}

export default Vehicles;
