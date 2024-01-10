import styles from "./Message.module.css";
import Navbar from "./Navbar";

export default function Message({ message }) {
  return (
    <div className={styles.messageContainer}>
      <h2 className={styles.message}>{message}</h2>
    </div>
  );
}
