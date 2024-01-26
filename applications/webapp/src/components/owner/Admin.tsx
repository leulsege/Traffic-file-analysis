import styles from "./Admin.module.css";

function Admin({ admin }) {
  const textClass = admin.approved ? styles.approved : styles.notApproved;

  if (!admin.verified) {
    return null;
  }

  return (
    <div className={styles.container}>
      <img className={styles.driverImg} src={admin.photo} />
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
