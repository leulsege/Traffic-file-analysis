import { Link } from "react-router-dom";
import styles from "./TrainersForm.module.css";
import { useState } from "react";

function Form() {
  // PRE-FILL FOR DEV PURPOSES
  const [licenseNumber, setLicenseNumber] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState("");
  const [trainingEndDate, setTrainingEndDate] = useState("");
  const [trainingPassPoint, setTrainingPassPoint] = useState("");
  const [trainingResult, setTrainingResult] = useState("");

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">License Number of Trainer</label>
          <input
            type="text"
            id="licenseNumber"
            onChange={(e) => setLicenseNumber(e.target.value)}
            value={licenseNumber}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Training Type</label>
          <input
            type="text"
            id="trainingType"
            onChange={(e) => setTrainingType(e.target.value)}
            value={trainingType}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">training Start Date</label>
          <input
            type="date"
            id="trainingStartDate"
            onChange={(e) => setTrainingStartDate(e.target.value)}
            value={trainingStartDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">training EndDate</label>
          <input
            type="date"
            id="training End Date"
            onChange={(e) => setTrainingEndDate(e.target.value)}
            value={trainingEndDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">training Pass Point</label>
          <input
            type="text"
            id="idNumber"
            onChange={(e) => setTrainingPassPoint(e.target.value)}
            value={trainingPassPoint}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Training Result</label>
          <input
            type="text"
            id="trainingResult"
            onChange={(e) => setTrainingResult(e.target.value)}
            value={trainingResult}
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
