import { useNavigate } from "react-router-dom";
import styles from "./accidentTrack.module.css";

function accidentSummery({ accident }: any) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/accidents/${accident._id}`);
  }
  return (
    <div className={styles.accidentTrack} onClick={handleClick}>
      <img
        className={styles.accidentImg}
        src={
          accident.photo
            ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/accidents/${
                accident.photo
              }`
            : "/default-accident.png"
        }
      />
      <div className={styles.accidentContent}>
        <div className={styles.flex}>
          <span className={styles.accidentTitle}>{accident.cause}</span>
          <span className={styles.reducedPoint}>-{accident.reducedPoint}</span>
        </div>

        <p className={styles.accidentDescription}>
          {accident.accidentDate?.split("T")[0]}
        </p>
      </div>
    </div>
  );
}

export default accidentSummery;
