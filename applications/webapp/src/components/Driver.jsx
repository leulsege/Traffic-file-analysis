import styles from "./Driver.module.css";

function Driver({ driver }) {
  return (
    <div className={styles.container}>
      <img className={styles.driverImg} src={driver.img} />
      <span className={styles.name}>{driver.name}</span>
    </div>
  );
}

export default Driver;
