// Display.jsx

import VehicleList from "./VehicleList";
import styles from "./VehiclesDisplay.module.css";
import { useState } from "react";
import AddVehicleForm from "./AddVehicleForm";

function Display({
  vehicles,
  isLoading,
  handleNextPage,
  handlePrevPage,
  page,
  results,
}: any) {
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
          <AddVehicleForm />
        </div>
      ) : (
        <div className={styles.display}>
          <button className={styles.buttonAdd} onClick={handleAddDriversClick}>
            Add Vehicle
          </button>
          <VehicleList vehicles={vehicles} isLoading={isLoading} />

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
