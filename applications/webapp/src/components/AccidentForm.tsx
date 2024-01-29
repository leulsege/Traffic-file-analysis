import { Link } from "react-router-dom";
import styles from "./AccidentForm.module.css";
import { useState, useEffect } from "react";

function AccidentForm() {
  const [accidentDate, setAccidentDate] = useState("");
  const [accidentPlace, setAccidentPlace] = useState("");
  const [damages, setDamages] = useState("");
  const [causes, setCauses] = useState("");
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

  return (
    <main className={styles.login}>
      <form className={styles.form}>
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
            onChange={(e) => setCauses(e.target.value)}
            value={causes}
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
            type="text"
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
            onChange={(e) => setReducedPoint(e.target.value)}
            value={reducedPoint}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">የተሰጠው ውሳኔ</label>
          <input
            type="text"
            id="givenDecision"
            onChange={(e) => setGivenDecision(e.target.value)}
            value={givenDecision}
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
