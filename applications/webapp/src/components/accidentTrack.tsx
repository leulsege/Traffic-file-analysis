import styles from "./accidentTrack.module.css";

function accidentTrack() {
  return (
    <div className={styles.accidentTrack}>
      <img
        className={styles.accidentImg}
        src="accident.png"
        alt="accident picture"
      />
      <div className={styles.accidentContent}>
        <p className={styles.accidentTitle}>የአደጋው አይነት</p>
        <p className={styles.accidentDescription}>16/06/2016</p>
      </div>
    </div>
  );
}

export default accidentTrack;
