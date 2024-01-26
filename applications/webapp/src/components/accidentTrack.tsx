import styles from "./accidentTrack.module.css";
import AccidentSummery from "./AccidentSummery";

function accidentTrack({ accidents }) {
  return (
    <div className={styles.driverList}>
      {accidents.map((accident) => (
        <AccidentSummery key={accident._id} accident={accident} />
      ))}
    </div>
  );
}

export default accidentTrack;
