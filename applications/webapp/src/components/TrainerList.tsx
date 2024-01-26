// driversList.jsx

import Spinner from "./Spinner";
import styles from "./driversList.module.css";
import Trainer from "./Trainer";

function TrainerList({ trainers, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Trainer List</h1>
      </div>
      <div className={styles.driverList}>
        {trainers.map((trainer) => {
          if (!trainer._id) {
            console.error("Vehicle id is missing:", trainer);
            return null;
          }

          return <Trainer key={trainer.id} trainer={trainer} />;
        })}
      </div>
    </>
  );
}

export default TrainerList;
