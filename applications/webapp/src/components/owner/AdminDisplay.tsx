// Display.jsx

import styles from "../Display.module.css";
import { useState } from "react";
import AdminList from "./AdminList";

function AdminDisplay({ admins, isLoading }) {
  return (
    <div className={styles.display}>
      <AdminList admins={admins} isLoading={isLoading} />
    </div>
  );
}

export default AdminDisplay;
