import styles from "./LoggedinNavBar.module.css";
import { NavLink } from "react-router-dom";

import LogoLoggedin from "./LogoLoggedin";
import { useState } from "react";

function LoggedinNavBar() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [givenPoint, setGivenPoint] = useState();
  const [trainingEntryPoint, setTrainingEntryPoint] = useState();

  function handleInputClick() {
    setIsButtonVisible(true);
  }

  function handleInputBlur() {
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 2000); // Delay hiding the button to allow time for the button click event to be processed
  }

  function handleOnClick() {
    console.log("clicked");
  }

  return (
    <nav className={styles.nav}>
      <LogoLoggedin />
      <div className={styles.pointInputContainer}>
        <div className={styles.row}>
          <label htmlFor="text">የተሰጠው ነጥብ:</label>
          <input
            type="number"
            id="givenPoint"
            onChange={(e) => setGivenPoint(e.target.value)}
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
            onChange={(e) => setTrainingEntryPoint(e.target.value)}
            value={trainingEntryPoint}
            className={styles.inputStyle}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
          />
        </div>
        {isButtonVisible && (
          <button className={styles.updbtn} onClick={handleOnClick}>
            Submit
          </button>
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
