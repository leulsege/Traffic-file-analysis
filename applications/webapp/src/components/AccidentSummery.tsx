import styles from "./accidentTrack.module.css";

function accidentSummery({ accident }) {
  return (
    <div className={styles.accidentTrack}>
      <img
        className={styles.accidentImg}
        src={accident.photo}
        alt="accident picture"
      />
      <div className={styles.accidentContent}>
        <div className={styles.flex}>
          <span className={styles.accidentTitle}>{accident.cause}</span>
          <span className={styles.reducedPoint}>-{accident.reducedPoint}</span>
        </div>

        <p className={styles.accidentDescription}>
          {accident.accidentDate.split("T")[0]}
        </p>
      </div>
    </div>
  );
}

export default accidentSummery;
