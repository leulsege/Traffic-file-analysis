import { Link, useNavigate } from "react-router-dom";
import styles from "./AccidentViewForm.module.css";
import { useState, useEffect } from "react";

function AccidentForm({ accidentData, setAccident }) {
  const navigate = useNavigate();

  const [plateNumber, setPlateNumber] = useState(
    accidentData.vehicle.plateNumber
  );
  const [accidentDate, setAccidentDate] = useState(
    accidentData.accidentDate.split("T")[0]
  );
  const [accidentPlace, setAccidentPlace] = useState(
    accidentData.accidentPlace
  );
  const [damages, setDamages] = useState(accidentData.damages);
  const [cause, setCause] = useState(accidentData.cause);
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

  const [reducedPoint, setReducedPoint] = useState(accidentData.reducedPoint);
  const [givenDecision, setGivenDecision] = useState(
    accidentData.givenDecision
  );

  async function handleUpdate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/vehicleaccidents/${
          accidentData._id
        }`,
        {
          method: "PATCH",
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
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const accidentInfo = await response.json();
        setAccident(accidentInfo.data.vehicleAccident);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching vehicle:", error);
    }
  }

  async function handleDelete() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/vehicleaccidents/${
          accidentData._id
        }`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        navigate("/drivers");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching vehicle:", error);
    }
  }
  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="text">Vehicle Plate Number</label>
          <input
            type="text"
            id="accidentPlace"
            onChange={(e) => setPlateNumber(e.target.value)}
            value={plateNumber}
            required
          />
        </div>
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
          <label htmlFor="text">Cause</label>
          <input
            type="text"
            id="accidentPlace"
            onChange={(e) => setCause(e.target.value)}
            value={cause}
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
          <button className={styles.updbtn} onClick={handleUpdate}>
            update Accident
          </button>
          <button className={styles.delbtn} onClick={handleDelete}>
            Delete Accident
          </button>
        </div>
      </form>
    </main>
  );
}

export default AccidentForm;
