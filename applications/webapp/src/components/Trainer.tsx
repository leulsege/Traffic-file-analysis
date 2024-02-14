import styles from "../components/owner/Admin.module.css";
import { useNavigate } from "react-router";

function Trainer({ trainer }: any) {
  const navigate = useNavigate();

  function handleTrainer() {
    navigate(`/trainings/${trainer._id}`);
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
      {!trainer.trainingStartDate && (
        <span className={styles.approved}>{"new"}</span>
      )}
    </div>
  );
}

export default Trainer;
