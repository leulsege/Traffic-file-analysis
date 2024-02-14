// Display.jsx

import DriversList from "./DriversList";
import styles from "./Display.module.css";
function FiredDisplay({
  drivers,
  isLoading,
  handleNextPage,
  handlePrevPage,
  page,
  results,
}: any) {
  const inactiveDrivers = drivers.filter((driver: any) => !driver.active);
  const from = { from: "fired" };

  return (
    <>
      <div className={styles.display}>
        <DriversList
          drivers={inactiveDrivers}
          from={from}
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
    </>
  );
}

export default FiredDisplay;
