import styles from "./Display.module.css";
import TrainerList from "./TrainerList";

function TrainersDisplay({
  trainers,
  isLoading,
  handlePrevPage,
  handleNextPage,
  page,
  results,
}: any) {
  const activeTrainers = trainers.filter(
    (trainer: any) => trainer.activeTrainer
  );

  return (
    <div className={styles.display}>
      <TrainerList trainers={activeTrainers} isLoading={isLoading} />

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

export default TrainersDisplay;
