// driversList.jsx

import Admin from "./Admin";
import Spinner from "../Spinner";
import styles from "../DriversList.module.css";

function AdminList({ admins, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Admins List</h1>
      </div>
      <div className={styles.driverList}>
        {admins.map((admin) => (
          <Admin key={admin._id} admin={admin} />
        ))}
      </div>
    </>
  );
}

export default AdminList;
