import React, { useEffect, useState } from "react";
import styles from "./DriverProfile.module.css";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import AccidentForm from "../components/AccidentForm";
import AccidentTrack from "../components/accidentTrack";
import PhotoUpload from "../components/photoUpload";
import LoggedinNavBar from "../components/LoggedinNavBar";
import CustomSnackbar from "../components/CustomSnackBar";

function DriverProfile() {
  const [driver, setDriver] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showAccidentForm, setShowAccidentForm] = useState(false);
  const driverId = useParams();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  useEffect(function () {
    async function fetchDriver() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/drivers/${driverId.id}`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const driverInfo = await response.json();
          setDriver(driverInfo.data.driver);
          console.log(driverInfo.data.driver, "from driver profile");
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching driver:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDriver();
  }, []);

  const toggleAccidentForm = () => {
    if (driver.vehicle) return setShowAccidentForm(!showAccidentForm);
    setSnackbarMessage("በመጀመሪያ ለአሽከርካሪው መኪና ይሰይሙ");
    setSnackbarSeverity("error");
    setShowSnackbar(true);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <LoggedinNavBar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <a
            href={
              driver.photo &&
              `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                driver.photo
              }`
            }
          >
            <img
              src={
                driver.photo
                  ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                      driver.photo
                    }`
                  : "/default-user-profile.jpg"
              }
              className={styles.driverImg}
            />
          </a>
          <PhotoUpload
            url={`drivers/uploadphoto/${driverId.id}`}
            setProfile={setDriver}
          />
          <p className={styles.name}>{driver.fullName}</p>
          <p className={styles.phoneNumber}>{driver.phoneNumber}</p>
          <p className={styles.currentPoint}>ቀሪ ነጥብ = {driver.currentPoint}</p>
        </div>
        <div className={styles.profileSettings}>
          <UserForm driver={driver} setDriver={setDriver} />
        </div>
        <div className={styles.accidentGrid}>
          {showAccidentForm ? (
            <>
              <AccidentForm
                onCancel={toggleAccidentForm}
                driver={driver}
                setShowAccidentForm={setShowAccidentForm}
              />
            </>
          ) : (
            <>
              <div className={styles.btns}>
                <button
                  onClick={toggleAccidentForm}
                  className={styles.addButton}
                >
                  Add Accident
                </button>
                <button className={styles.delbtn}>Clear</button>
              </div>
              <CustomSnackbar
                open={showSnackbar}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                severity={snackbarSeverity}
              />
              <AccidentTrack accidents={driver.accidentRecord} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default DriverProfile;
