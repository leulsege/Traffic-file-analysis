import { Link } from "react-router-dom";
import styles from "./AdminForm.module.css";
import { useState } from "react";
import { useStepContext } from "@mui/material";

function AdminForm({ admin }) {
  const [firstName, setFirstName] = useState(admin.firstName);
  const [lastName, setLastName] = useState(admin.lastName);
  // PRE-FILL FOR DEV PURPOSES

  return (
    <>
      <main className={styles.login}>
        <form className={styles.form}>
          <div className={styles.row}>
            <label htmlFor="text">Fist Name</label>
            <input
              type="text"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="text">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="text">Email</label>
            <span> {admin.email}</span>
          </div>

          <div className={styles.buttons}>
            <Link className={styles.ctaLink}>Save</Link>
            <button className={styles.delbtn}>Log out</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default AdminForm;
