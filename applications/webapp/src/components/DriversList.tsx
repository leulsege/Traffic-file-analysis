// driversList.jsx

import Driver from "./Driver";
import Spinner from "./Spinner";
import styles from "./DriversList.module.css";

function DriversList({ drivers, isLoading, from }: any) {
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {from?.from == "topdrivers"
            ? "ምንም አደጋ ያላደረሱ አሽከርካሪዎች"
            : from?.from == "fired"
            ? "የተሰናበቱ አሽከርካሪዎች"
            : "የአሽካሪዎች ዝርዝር"}
        </h1>
      </div>
      <div className={styles.driverList}>
        {drivers.map((driver: any) => (
          <Driver key={driver._id} driver={driver} />
        ))}
      </div>
    </>
  );
}

export default DriversList;
