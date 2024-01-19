import styles from "./Driver.module.css";

function Trainer({ trainer }) {
  console.log(trainer, "from trainer");
  return (
    <div className={styles.container}>
      <img className={styles.driverImg} src="vehicle.jpg" />
      <span className={styles.name}>{trainer.driver.name}</span>
    </div>
  );
}

export default Trainer;
