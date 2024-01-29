import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./UserForm.module.css";
import { useState } from "react";

function UserForm({ trainings, setTraining }) {
  const navigate = useNavigate();
  const trainerId = useParams();

  const [trainingType, setTrainingType] = useState(trainings.trainingType);
  const [name, setName] = useState(trainings.driver.fullName);
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

  async function handleUpdate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/trainings/${trainerId.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            trainingType,
            trainingStartDate,
            trainingEndDate,
            trainingPassPoint,
            trainingResult,
            checkUp,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const trainerInfo = await response.json();
        setTraining(trainerInfo.data.training);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching trainer:", error);
    }
  }

  async function handleDelete() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/trainings/${trainerId.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        navigate("/trainings");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching trainer:", error);
    }
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
          <button className={styles.updbtn} onClick={handleUpdate}>
            Update Trainer
          </button>
          <button className={styles.delbtn} onClick={handleDelete}>
            Remove Trainer
          </button>
        </div>
      </form>
    </main>
  );
}

export default UserForm;
