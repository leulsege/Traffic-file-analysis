// driversList.jsx

import Spinner from "./Spinner";
import styles from "./DriversList.module.css";
import Trainer from "./Trainer";

function TrainerList({ trainers, isLoading, from }: any) {
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {" "}
          {from?.from == "extrainers" ? "ከዚህ በፊት ስልጠና የወሰዱ" : "የሰልጣኞች ዝርዝር"}
        </h1>
      </div>
      <div className={styles.driverList}>
        {trainers.map((trainer: any) => {
          if (!trainer._id) {
            console.error("Vehicle id is missing:", trainer);
            return null;
          }

          return <Trainer key={trainer._id} trainer={trainer} />;
        })}
      </div>
    </>
  );
}

export default TrainerList;
