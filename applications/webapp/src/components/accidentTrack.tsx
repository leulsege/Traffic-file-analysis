import styles from "./accidentTrack.module.css";
import AccidentSummery from "./AccidentSummery";

function accidentTrack({ accidents }: any) {
  return (
    <div className={styles.driverList}>
      {accidents.map((accident: any) => (
        <AccidentSummery key={accident._id} accident={accident} />
      ))}
    </div>
  );
}

export default accidentTrack;
