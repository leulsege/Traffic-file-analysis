// Display.jsx

import DriversList from "./DriversList";
import styles from "./Display.module.css";
import { useState } from "react";
import AddDriverForm from "./AddDriverForm";
function TopDriverDisplay({
  drivers,
  isLoading,
  handleNextPage,
  handlePrevPage,
  page,
  results,
}) {
  function handleAddDriversClick() {
    setIsFormVisible(true);
  }

  function handleBack() {
    setIsFormVisible(false);
  }

  const from = { from: "topdrivers" };

  return (
    <>
      <div className={styles.display}>
        <button className={styles.buttonAdd} onClick={handleAddDriversClick}>
          Add Drivers
        </button>
        <DriversList from={from} drivers={drivers} isLoading={isLoading} />

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

export default TopDriverDisplay;
