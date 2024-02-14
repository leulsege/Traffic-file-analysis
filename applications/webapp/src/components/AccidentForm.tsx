import { useNavigate } from "react-router-dom";
import styles from "./AccidentForm.module.css";
import { useState } from "react";
import CustomSnackbar from "./CustomSnackBar";

function AccidentForm({ driver, setShowAccidentForm }: any) {
  const [accidentDate, setAccidentDate] = useState("");
  const [accidentPlace, setAccidentPlace] = useState("");
  const [damages, setDamages] = useState("");
  const [cause, setCause] = useState("");
  const [guilty, setGuilty] = useState("");
  const [damageEstimation, setDamageEstimation] = useState("");
  const [insuranceSentDate, setInsuranceSentDate] = useState("");
  const [excessLetterDate, setExcessLetterDate] = useState("");
  const [maintenanceProcess, setMaintenanceProcess] = useState("");
  const [preformDate, setPreformDate] = useState("");
  const [paymentDateLetterNumber, setPaymentDateLetterNumber] = useState("");
  const [paymentRequestLetterDate, setPaymentRequestLetterDate] = useState("");
  const [reducedPoint, setReducedPoint] = useState();
  const [givenDecision, setGivenDecision] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  const navigate = useNavigate();

  function handleBack() {
    setShowAccidentForm(false);
  }

  async function handleCreate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/vehicleaccidents`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accidentDate,
            accidentPlace,
            damages,
            cause,
            guilty,
            damageEstimation,
            insuranceSentDate,
            excessLetterDate,
            maintenanceProcess,
            preformDate,
            paymentDateLetterNumber,
            paymentRequestLetterDate,
            reducedPoint,
            givenDecision,
            driver: driver._id,
            vehicle: driver.vehicle._id,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const accidentInfo = await response.json();
        navigate(`/accidents/${accidentInfo.data.vehicleAccident._id}`);
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
      console.error("Error fetching driver:", error);
    }
  }

  return (
    <main className={styles.login}>
      <button className={styles.back} onClick={handleBack}>
        Back
      </button>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="text">የአደጋው ቦታ</label>
          <input
            type="text"
            id="accidentPlace"
            onChange={(e) => setAccidentPlace(e.target.value)}
            value={accidentPlace}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የአደጋ ቀን</label>
          <input
            type="date"
            id="firstName"
            onChange={(e) => setAccidentDate(e.target.value)}
            value={accidentDate}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">የደረሰ ጉዳት</label>
          <input
            type="text"
            id="damages"
            onChange={(e) => setDamages(e.target.value)}
            value={damages}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="text">መንስኤ</label>
          <input
            type="text"
            id="accidentPlace"
            onChange={(e) => setCause(e.target.value)}
            value={cause}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ጥፋተኛ</label>
          <input
            type="text"
            id="guilty"
            onChange={(e) => setGuilty(e.target.value)}
            value={guilty}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የጉዳቱ ግምት</label>
          <input
            type="text"
            id="damageEstimation"
            onChange={(e) => setDamageEstimation(e.target.value)}
            value={damageEstimation}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ወደ ኢንሹራንስ የተላከበት ቀን</label>
          <input
            type="date"
            id="insuranceSentDate"
            onChange={(e) => setInsuranceSentDate(e.target.value)}
            value={insuranceSentDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ኤክሰስ የተቆረጠበት ደብዳ ቁጥር</label>
          <input
            type="date"
            id="iexcessLetterDate"
            onChange={(e) => setExcessLetterDate(e.target.value)}
            value={excessLetterDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ጥገናው ያለበት ደረጃ</label>
          <input
            type="texts"
            id="maintenanceProcess"
            onChange={(e) => setMaintenanceProcess(e.target.value)}
            value={maintenanceProcess}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ፕሮፎርማ የተሰራበት ቀን</label>
          <input
            type="date"
            id="preform Date"
            onChange={(e) => setPreformDate(e.target.value)}
            value={preformDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ክፍያ የተጠየቀበት ቀን የደብዳቤ ቁጥር</label>
          <input
            type="text"
            id="paymentDateLetterNumber"
            onChange={(e) => setPaymentDateLetterNumber(e.target.value)}
            value={paymentDateLetterNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የተሰበሰበበት ቀን</label>
          <input
            type="Date"
            id="paymentRequestLetterDate"
            onChange={(e) => setPaymentRequestLetterDate(e.target.value)}
            value={paymentRequestLetterDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="Number">ተቀናናሽ ነጥብ</label>
          <input
            type="Number"
            id="reducedPoint"
            onChange={(e) => setReducedPoint(e.target.value as any)}
            value={reducedPoint}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የተሰጠው ውሳኔ</label>
          <input
            type="text"
            id="givenDecision"
            onChange={(e) => setGivenDecision(e.target.value as any)}
            value={givenDecision}
          />
        </div>

        <div className={styles.buttons}>
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

export default AccidentForm;
