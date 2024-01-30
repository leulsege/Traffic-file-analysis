import styles from "./Driver.module.css";
import { useNavigate } from "react-router";

function Trainer({ trainer }) {
  const navigate = useNavigate();

  function handleTrainer() {
    navigate(`${trainer._id}`);
  }
  return (
    <div className={styles.container} onClick={handleTrainer}>
      <img
        src={
          trainer.driver.photo
            ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                trainer.driver.photo
              }`
            : "/default-user-profile.jpg"
        }
        className={styles.driverImg}
      />
      <span className={styles.name}>{trainer.driver.fullName}</span>
    </div>
  );
}

export default Trainer;