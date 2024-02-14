import styles from "./Display.module.css";
import TrainerList from "./TrainerList";

function ExTrainersDisplay({
  trainers,
  isLoading,
  handlePrevPage,
  handleNextPage,
  page,
  results,
}: any) {
  const inactiveTrainers = trainers.filter(
    (trainer: any) => !trainer.activeTrainer
  );
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
