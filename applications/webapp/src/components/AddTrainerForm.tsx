import { useNavigate } from "react-router-dom";
import styles from "./TrainersForm.module.css";
import { useState } from "react";
import CustomSnackbar from "./CustomSnackBar";

function AddTrainerForm() {
  const [driver, setDriver] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState("");
  const [trainingEndDate, setTrainingEndDate] = useState("");
  const [trainingPassPoint, setTrainingPassPoint] = useState("");
  const [trainingResult, setTrainingResult] = useState("");
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  async function handleCreate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/trainings`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            driver,
            trainingType,
            trainingStartDate,
            trainingEndDate,
            trainingPassPoint,
            trainingResult,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const training = await response.json();
        navigate(`/trainings/${training.data.training._id}`);
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.message);
        setSnackbarSeverity("error");
        setShowSnackbar(true);
        console.log(errorData);
      }
    } catch (error) {
      setSnackbarMessage("unknown error");
      setSnackbarSeverity("success");
      setShowSnackbar(true);
      console.error("Error fetching trainer:", error);
    }
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="text">የሰልጣኙ መንጃ ፈቃድ ቁጥር</label>
          <input
            type="text"
            id="licenseNumber"
            onChange={(e) => setDriver(e.target.value)}
            value={driver}
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
          <label htmlFor="text">ስልጠናው የጀመረበት ቀን</label>
          <input
            type="date"
            id="trainingStartDate"
            onChange={(e) => setTrainingStartDate(e.target.value)}
            value={trainingStartDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ስልጠናው ያበቃበት ቀን</label>
          <input
            type="date"
            id="training End Date"
            onChange={(e) => setTrainingEndDate(e.target.value)}
            value={trainingEndDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የስልጠናው ማለፊያ ነጥብ</label>
          <input
            type="text"
            id="idNumber"
            onChange={(e) => setTrainingPassPoint(e.target.value)}
            value={trainingPassPoint}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የተገኘ ውጤት</label>
          <input
            type="text"
            id="trainingResult"
            onChange={(e) => setTrainingResult(e.target.value)}
            value={trainingResult}
          />
        </div>

        <div>
          <button className={styles.updbtn} onClick={handleCreate}>
            Submit
          </button>
          <CustomSnackbar
            open={showSnackbar}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
            severity={snackbarSeverity}
          />
        </div>
      </form>
    </main>
  );
}

export default AddTrainerForm;
