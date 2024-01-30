import styles from "./Display.module.css";
import { useState } from "react";
import TrainerList from "./TrainerList";
import AddTrainerForm from "./AddTrainerForm";

function TrainersDisplay({
  trainers,
  isLoading,
  handlePrevPage,
  handleNextPage,
  page,
  results,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleAddDriversClick() {
    setIsFormVisible(true);
  }

  function handleBack() {
    setIsFormVisible(false);
  }

  return (
    <>
      {isFormVisible ? (
        <div className={styles.formContainer}>
          <button className={styles.back} onClick={handleBack}>
            Back
          </button>
          <AddTrainerForm />
        </div>
      ) : (
        <div className={styles.display}>
          <button className={styles.buttonAdd} onClick={handleAddDriversClick}>
            Add Trainers
          </button>
          <TrainerList trainers={trainers} isLoading={isLoading} />

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
      )}
    </>
  );
}

export default TrainersDisplay;
