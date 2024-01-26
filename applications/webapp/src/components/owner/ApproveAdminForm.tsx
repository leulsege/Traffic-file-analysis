import { Link } from "react-router-dom";
import styles from "./AdminForm.module.css";
import { useState } from "react";
import { useStepContext } from "@mui/material";

function AdminForm({ admin }) {
  // PRE-FILL FOR DEV PURPOSES

  return (
    <>
      <main className={styles.login}>
        <form className={styles.form}>
          <div className={styles.row}>
            <label htmlFor="text">Fist Name</label>
            <span>
              {" "}
              {admin.firstName} {admin.lastName}
            </span>
          </div>

          <div className={styles.row}>
            <label htmlFor="text">Email</label>
            <span> {admin.email}</span>
          </div>

          <div className={styles.buttons}>
            {admin.approve && <Link className={styles.ctaLink}>Approve</Link>}
            <button className={styles.delbtn}>Delete</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default AdminForm;
