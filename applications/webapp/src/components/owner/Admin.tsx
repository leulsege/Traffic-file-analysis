import { useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

function Admin({ admin }: any) {
  const navigate = useNavigate();
  const textClass = admin.approved ? styles.approved : styles.notApproved;

  const handleAdmin = () => {
    navigate(admin._id);
  };

  if (!admin.verified) {
    return null;
  }

  return (
    <div className={styles.container} onClick={handleAdmin}>
      <img
        className={styles.driverImg}
        src={
          admin.photo
            ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/admins/${
                admin.photo
              }`
            : "/default-user-profile.jpg"
        }
      />
      <span className={styles.name}>
        {admin.firstName} {admin.lastName}
      </span>
      <span className={`${textClass}`}>
        {admin.approved ? "approved" : "Not Approved"}
      </span>
    </div>
  );
}

export default Admin;
