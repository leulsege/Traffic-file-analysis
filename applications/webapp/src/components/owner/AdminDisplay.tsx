// Display.jsx

import styles from "../Display.module.css";
import { useState } from "react";
import AdminList from "./AdminList";

function AdminDisplay({ admins, isLoading }) {
  return (
    <div className={styles.display}>
      <AdminList admins={admins} isLoading={isLoading} />

      {!isLoading && (
        <div className={styles.buttons}>
          <button className={styles.button}>Back</button>
          <button className={styles.button}>Next</button>
        </div>
      )}
    </div>
  );
}

export default AdminDisplay;
