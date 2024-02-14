import { useNavigate } from "react-router";
import styles from "./Driver.module.css";

function Driver({ driver }: any) {
  const navigate = useNavigate();

  const handleDriver = () => {
    navigate(`/drivers/${driver._id}`);
  };

  return (
    <div className={styles.container} onClick={handleDriver}>
      <img
        className={styles.driverImg}
        src={
          driver.photo
            ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                driver.photo
              }`
            : "/default-user-profile.jpg"
        }
      />
      <span className={styles.name}>{driver.fullName}</span>
    </div>
  );
}

export default Driver;
