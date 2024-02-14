// driversList.jsx

import Spinner from "./Spinner";
import styles from "./DriversList.module.css";
import Vehicle from "./Vehicle";

function VehicleList({ vehicles, isLoading }: any) {
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Vehicles List</h1>
      </div>
      <div className={styles.driverList}>
        {vehicles.map((vehicle: any) => {
          if (!vehicle._id) {
            console.error("Vehicle id is missing:", vehicle);
            return null;
          }

          return <Vehicle key={vehicle._id} vehicle={vehicle} />;
        })}
      </div>
    </>
  );
}

export default VehicleList;
