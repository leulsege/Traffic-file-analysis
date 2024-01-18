import { useNavigate } from "react-router";
import styles from "./Driver.module.css";

function Driver({ driver }) {
  const navigate = useNavigate();

  const handleDriver = () => {
    navigate(driver._id);
  };

  return (
    <div className={styles.container} onClick={handleDriver}>
      <img
        className={styles.driverImg}
        src={
          driver.photo
            ? `http://localhost:8000/img/drivers/${driver.photo}`
            : "/default-user-profile.jpg"
        }
      />
      <span className={styles.name}>{driver.name}</span>
    </div>
  );
}

export default Driver;
