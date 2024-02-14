import styles from "./LoggedinNavBar.module.css";
import { NavLink } from "react-router-dom";

import LogoLoggedin from "./LogoLoggedin";
import { useEffect, useState } from "react";
import CustomSnackbar from "./CustomSnackBar";

function LoggedinNavBar() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [givenPoint, setGivenPoint] = useState();
  const [trainingEntryPoint, setTrainingEntryPoint] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  function handleInputClick() {
    setIsButtonVisible(true);
  }

  function handleInputBlur() {
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 3000);
  }

  async function handleOnClick() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/setconfig`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            givenPoint,
            trainingEntryPoint,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const configInfo = await response.json();
        setGivenPoint(configInfo.givenPoint);
        setTrainingEntryPoint(configInfo.trainingEntryPoint);
        setSnackbarMessage("Config Updated Successfully!");
        setSnackbarSeverity("success");
        setShowSnackbar(true);
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.message);
        setSnackbarSeverity("error");
        setShowSnackbar(true);
        console.log(errorData);
      }
    } catch (error) {
      setSnackbarMessage("unknown error");
      setSnackbarSeverity("success");
      setShowSnackbar(true);
      console.error("Error fetching config data:", error);
    }
  }

  useEffect(function () {
    async function fetchDriver() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/setconfig`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const configInfo = await response.json();
          setGivenPoint(configInfo.givenPoint);
          setTrainingEntryPoint(configInfo.trainingEntryPoint);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching config data:", error);
      }
    }
    fetchDriver();
  }, []);

  return (
    <nav className={styles.nav}>
      <LogoLoggedin />
      <div className={styles.pointInputContainer}>
        <div className={styles.row}>
          <label htmlFor="text">የተሰጠው ነጥብ:</label>
          <input
            type="number"
            id="givenPoint"
            onChange={(e) => setGivenPoint(e.target.value as any)}
            value={givenPoint}
            className={styles.inputStyle}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="text">ስልጠና የመግቢያ ነጥብ:</label>
          <input
            type="number"
            id="training End Date"
            onChange={(e) => setTrainingEntryPoint(e.target.value as any)}
            value={trainingEntryPoint}
            className={styles.inputStyle}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
          />
        </div>
        {isButtonVisible && (
          <>
            <button className={styles.updbtn} onClick={handleOnClick}>
              Submit
            </button>
            <CustomSnackbar
              open={showSnackbar}
              onClose={handleSnackbarClose}
              message={snackbarMessage}
              severity={snackbarSeverity}
            />
          </>
        )}
      </div>
      <ul>
        <li>
          <NavLink to="/profile" className={styles.ctaLink}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LoggedinNavBar;
