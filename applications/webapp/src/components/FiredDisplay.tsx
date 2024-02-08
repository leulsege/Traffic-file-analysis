// Display.jsx

import DriversList from "./DriversList";
import styles from "./Display.module.css";
import { useState } from "react";
import AddDriverForm from "./AddDriverForm";
function FiredDisplay({
  drivers,
  isLoading,
  handleNextPage,
  handlePrevPage,
  page,
  results,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const inactiveDrivers = drivers.filter((driver) => !driver.active);

  function handleAddDriversClick() {
    setIsFormVisible(true);
  }

  function handleBack() {
    setIsFormVisible(false);
  }

  return (
    <>
      <div className={styles.display}>
        <DriversList drivers={inactiveDrivers} isLoading={isLoading} />

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
    </>
  );
}

export default FiredDisplay;
