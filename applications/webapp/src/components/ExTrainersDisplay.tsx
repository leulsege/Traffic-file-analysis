import styles from "./Display.module.css";
import { useState } from "react";
import TrainerList from "./TrainerList";
import AddTrainerForm from "./AddTrainerForm";

function ExTrainersDisplay({
  trainers,
  isLoading,
  handlePrevPage,
  handleNextPage,
  page,
  results,
}) {
  const inactiveTrainers = trainers.filter((trainer) => !trainer.activeTrainer);
  const from = { from: "extrainers" };
  return (
    <div className={styles.display}>
      <TrainerList
        from={from}
        trainers={inactiveTrainers}
        isLoading={isLoading}
      />

      {!isLoading && (
        <div className={styles.buttons}>
          {page > 1 && (
            <button className={styles.button} onClick={handlePrevPage}>
              Back
            </button>
          )}
          {results != 0 && (
            <button className={styles.button} onClick={handleNextPage}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ExTrainersDisplay;
