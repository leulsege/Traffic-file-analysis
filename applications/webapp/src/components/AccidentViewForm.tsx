import { Link } from "react-router-dom";
import styles from "./AccidentViewForm.module.css";
import { useState, useEffect } from "react";

function AccidentForm({ accidentData }) {
  const [accidentDate, setAccidentDate] = useState(
    accidentData.accident_date.split("T")[0]
  );
  const [accidentPlace, setAccidentPlace] = useState(
    accidentData.accident_place
  );
  const [damages, setDamages] = useState(accidentData.damages);
  const [causes, setCauses] = useState(accidentData.cause);
  const [guilty, setGuilty] = useState(accidentData.guilty);
  const [damageEstimation, setDamageEstimation] = useState(
    accidentData.damageEstimation
  );
  const [insuranceSentDate, setInsuranceSentDate] = useState(
    accidentData.insuranceSentDate.split("T")[0]
  );
  const [excessLetterDate, setExcessLetterDate] = useState(
    accidentData.excessLetterDate.split("T")[0]
  );
  const [maintenanceProcess, setMaintenanceProcess] = useState(
    accidentData.maintenanceProcess
  );
  const [preformDate, setPreformDate] = useState(
    accidentData.preformDate.split("T")[0]
  );
  const [paymentDateLetterNumber, setPaymentDateLetterNumber] = useState(
    accidentData.paymentDateLetterNumber
  );
  const [paymentRequestLetterDate, setPaymentRequestLetterDate] = useState(
    accidentData.paymentRequestLetterDate.split("T")[0]
  );
  const [givenPoint, setGivenPoint] = useState(accidentData.givenPoint);
  const [reducedPoint, setReducedPoint] = useState(accidentData.reducedPoint);
  const [givenDecision, setGivenDecision] = useState(
    accidentData.givenDecision
  );

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

        <div className={styles.row}>
          <label htmlFor="text">Damage Estimation</label>
          <input
            type="text"
            id="damageEstimation"
            onChange={(e) => setDamageEstimation(e.target.value)}
            value={damageEstimation}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Insurance Sent Date</label>
          <input
            type="date"
            id="insuranceSentDate"
            onChange={(e) => setInsuranceSentDate(e.target.value)}
            value={insuranceSentDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Excess Letter Date</label>
          <input
            type="date"
            id="iexcessLetterDate"
            onChange={(e) => setExcessLetterDate(e.target.value)}
            value={excessLetterDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Maintenance Process</label>
          <input
            type="texts"
            id="maintenanceProcess"
            onChange={(e) => setMaintenanceProcess(e.target.value)}
            value={maintenanceProcess}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Preform Date</label>
          <input
            type="date"
            id="preform Date"
            onChange={(e) => setPreformDate(e.target.value)}
            value={preformDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">payment Date Letter Number</label>
          <input
            type="text"
            id="paymentDateLetterNumber"
            onChange={(e) => setPaymentDateLetterNumber(e.target.value)}
            value={paymentDateLetterNumber}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="date">Payment Request Letter Date</label>
          <input
            type="text"
            id="paymentRequestLetterDate"
            onChange={(e) => setPaymentRequestLetterDate(e.target.value)}
            value={paymentRequestLetterDate}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="Number">Given Point</label>
          <input
            type="Number"
            id="givenPoint"
            onChange={(e) => setGivenPoint(e.target.value)}
            value={givenPoint}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="Number">Reduced Point</label>
          <input
            type="Number"
            id="reducedPoint"
            onChange={(e) => setReducedPoint(e.target.value)}
            value={reducedPoint}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">Given Decision</label>
          <input
            type="text"
            id="givenDecision"
            onChange={(e) => setGivenDecision(e.target.value)}
            value={givenDecision}
          />
        </div>

        <div className={styles.buttons}>
          <Link className={styles.ctaLink}>Save Accident</Link>
          <button className={styles.delbtn}>Delete Accident</button>
        </div>
      </form>
    </main>
  );
}

export default AccidentForm;
