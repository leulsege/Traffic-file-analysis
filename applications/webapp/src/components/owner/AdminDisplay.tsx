// Display.jsx

import styles from "../Display.module.css";
import AdminList from "./AdminList";

function AdminDisplay({ admins, isLoading }: any) {
  return (
    <div className={styles.display}>
      <AdminList admins={admins} isLoading={isLoading} />
    </div>
  );
}

export default AdminDisplay;
