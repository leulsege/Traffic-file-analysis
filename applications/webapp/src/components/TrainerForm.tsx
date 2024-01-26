import { Link } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";
import { useStepContext } from "@mui/material";

function UserForm({ trainings }) {
  // PRE-FILL FOR DEV PURPOSES

  const [name, setName] = useState(trainings.driver.name);
  const [trainingType, setTrainingType] = useState(trainings.trainingType);
  const [trainingStartDate, setTrainingStartDate] = useState(
    trainings.trainingStartDate.split("T")[0]
  );
  const [trainingEndDate, setTrainingEndDate] = useState(
    trainings.trainingEndDate.split("T")[0]
  );

  const [trainingPassPoint, setTrainingPassPoint] = useState(
    trainings.trainingPassPoint
  );
  const [trainingResult, setTrainingResult] = useState(
    trainings.trainingResult
  );
  const [checkUp, setCheckUp] = useState(trainings.checkUp);
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="text">ሙሉ ስም</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">የስልጠናው አይነት</label>
          <input
            type="text"
            id="trainingType"
            onChange={(e) => setTrainingType(e.target.value)}
            value={trainingType}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ስልጠናው የተጀመረበት ቀን</label>
          <input
            type="date"
            id="trainingStartDate"
            onChange={(e) => setTrainingStartDate(e.target.value)}
            value={trainingStartDate}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ስልጠናው የሚያልቅበት ቀን</label>
          <input
            type="date"
            id="trainingEndDate"
            onChange={(e) => setTrainingEndDate(e.target.value)}
            value={trainingEndDate}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የስልጠናው ማለፊያ ነጥብ</label>
          <input
            type="text"
            id="trainingPassPoint"
            onChange={(e) => setTrainingPassPoint(e.target.value)}
            value={trainingPassPoint}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">የስልጠናው ውጤት</label>
          <input
            type="text"
            id="trainingResult"
            onChange={(e) => setTrainingResult(e.target.value)}
            value={trainingResult}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ምርመራ</label>
          <input
            type="text"
            id="checkUp"
            onChange={(e) => setCheckUp(e.target.value)}
            value={checkUp}
          />
        </div>

        <div className={styles.buttons}>
          <Link className={styles.ctaLink}>Save Form</Link>
          <button className={styles.delbtn}>Delete Trainer</button>
        </div>
      </form>
    </main>
  );
}

export default UserForm;
