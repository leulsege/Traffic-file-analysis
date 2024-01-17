import { Link } from "react-router-dom";
import styles from "./AccidentForm.module.css";
import { useState } from "react";

function AccidentForm() {
  const [accidentDate, setAccidentDate] = useState("");

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">Accident Date</label>
          <input
            type="date"
            id="firstName"
            onChange={(e) => setAccidentDate(e.target.value)}
            value={accidentDate}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Accident Date</label>
          <input
            type="date"
            id="firstName"
            onChange={(e) => setAccidentDate(e.target.value)}
            value={accidentDate}
            required
          />
        </div>

        <div className={styles.buttons}>
          <Link className={styles.ctaLink}>Submit</Link>
        </div>
      </form>
    </main>
  );
}

export default AccidentForm;
