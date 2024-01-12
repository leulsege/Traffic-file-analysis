// driversList.jsx

import Driver from "./Driver";
import Spinner from "./Spinner";
import styles from "./DriversList.module.css";

function DriversList({ drivers, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Drivers List</h1>
      </div>
      <div className={styles.driverList}>
        {drivers.map((driver) => (
          <Driver key={driver._id} driver={driver} />
        ))}
      </div>
    </>
  );
}

export default DriversList;
