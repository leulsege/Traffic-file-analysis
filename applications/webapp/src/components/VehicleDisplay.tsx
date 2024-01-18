// Display.jsx

import VehicleList from "./VehicleList";
import styles from "./Display.module.css";
import { useState } from "react";
import Form from "../components/Form";

function Display({ vehicles, isLoading }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  console.log(isFormVisible);

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
          <Form />
        </div>
      ) : (
        <div className={styles.display}>
          <button className={styles.buttonAdd} onClick={handleAddDriversClick}>
            Add Drivers
          </button>
          <VehicleList vehicles={vehicles} isLoading={isLoading} />

          {!isLoading && (
            <div className={styles.buttons}>
              <button className={styles.button}>Back</button>
              <button className={styles.button}>Next</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Display;
