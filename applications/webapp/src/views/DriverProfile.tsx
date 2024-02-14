import { useEffect, useState } from "react";
import styles from "./DriverProfile.module.css";
import UserForm from "../components/UserForm";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import AccidentForm from "../components/AccidentForm";
import AccidentTrack from "../components/accidentTrack";
import PhotoUpload from "../components/photoUpload";
import LoggedinNavBar from "../components/LoggedinNavBar";
import CustomSnackbar from "../components/CustomSnackBar";
import ConfirmationPrompt from "../components/ConfirmationPrompt";

function DriverProfile() {
  const [driver, setDriver] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showAccidentForm, setShowAccidentForm] = useState(false);
  const driverId = useParams();
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  async function handleClear() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/drivers/clear/${driverId.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        navigate(`/drivers`);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error clear accident:", error);
    }
  }

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
    if ((driver as any).vehicle) return setShowAccidentForm(!showAccidentForm);
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
              (driver as any).photo &&
              `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                (driver as any).photo
              }`
            }
          >
            <img
              src={
                (driver as any).photo
                  ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                      (driver as any).photo
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
          <p className={styles.name}>{(driver as any).fullName}</p>
          <p className={styles.phoneNumber}>{(driver as any).phoneNumber}</p>
          <p className={styles.currentPoint}>
            ቀሪ ነጥብ = {(driver as any).currentPoint}
          </p>
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
                <ConfirmationPrompt
                  onConfirm={handleClear}
                  onCancel={() => console.log("Deletion canceled")}
                >
                  <button className={styles.delbtn} onClick={handleClear}>
                    Clear
                  </button>
                </ConfirmationPrompt>
              </div>
              <CustomSnackbar
                open={showSnackbar}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                severity={snackbarSeverity}
              />
              <AccidentTrack accidents={(driver as any).accidentRecord} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default DriverProfile;
