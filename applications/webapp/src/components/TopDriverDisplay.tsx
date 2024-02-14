// Display.jsx

import DriversList from "./DriversList";
import styles from "./Display.module.css";
function TopDriverDisplay({
  drivers,
  isLoading,
  handleNextPage,
  handlePrevPage,
  page,
  results,
}: any) {
  const from = { from: "topdrivers" };

  return (
    <>
      <div className={styles.display}>
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
