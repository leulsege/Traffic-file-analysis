// Display.jsx

import DriversList from "./DriversList";
import styles from "./Display.module.css";
import { useState } from "react";
import AddDriverForm from "./AddDriverForm";
function Display({
  drivers,
  isLoading,
  handleNextPage,
  handlePrevPage,
  page,
  results,
}: any) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const activeDrivers = drivers.filter((driver: any) => driver.active);

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
          <AddDriverForm />
        </div>
      ) : (
        <div className={styles.display}>
          <button className={styles.buttonAdd} onClick={handleAddDriversClick}>
            Add Drivers
          </button>
          <DriversList drivers={activeDrivers} isLoading={isLoading} />

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

export default Display;
