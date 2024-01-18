import { Link } from "react-router-dom";
import styles from "./AccidentForm.module.css";
import { useState } from "react";

function AccidentForm() {
  const [accidentDate, setAccidentDate] = useState("");
  const [accidentPlace, setAccidentPlace] = useState("");
  const [damages, setDamages] = useState("");
  const [causes, setCauses] = useState("");
  const [guilty, setGuilty] = useState("");

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">Accident Place</label>
          <input
            type="text"
            id="accidentPlace"
            onChange={(e) => setAccidentPlace(e.target.value)}
            value={accidentPlace}
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
        <div className={styles.row}>
          <label htmlFor="text">Damages</label>
          <input
            type="text"
            id="damages"
            onChange={(e) => setDamages(e.target.value)}
            value={damages}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">Causes</label>
          <input
            type="text"
            id="accidentPlace"
            onChange={(e) => setCauses(e.target.value)}
            value={causes}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Guilty</label>
          <input
            type="text"
            id="guilty"
            onChange={(e) => setGuilty(e.target.value)}
            value={guilty}
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
