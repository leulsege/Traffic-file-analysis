import styles from "./Message.module.css";

export default function Message({ message }: any) {
  return (
    <div className={styles.messageContainer}>
      <h2 className={styles.message}>{message}</h2>
    </div>
  );
}
