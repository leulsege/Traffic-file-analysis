import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";

function Form() {
  // PRE-FILL FOR DEV PURPOSES
  const [licenseLevel, setLicenseLevel] = useState("");
  const [name, setName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">License Level</label>
          <input
            type="text"
            id="licenselevel"
            onChange={(e) => setLicenseLevel(e.target.value)}
            value={licenseLevel}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">License Number</label>
          <input
            type="text"
            id="licenseNumber"
            onChange={(e) => setLicenseNumber(e.target.value)}
            value={licenseNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">id Number</label>
          <input
            type="text"
            id="idNumber"
            onChange={(e) => setIdNumber(e.target.value)}
            value={idNumber}
          />
        </div>

        <div>
          <Link className={styles.ctaLink}>Add Driver</Link>
        </div>
      </form>
    </main>
  );
}

export default Form;
