import React, { useEffect, useState } from "react";
import styles from "./DriverProfile.module.css";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import AccidentForm from "../components/AccidentForm";
import AccidentTrack from "../components/accidentTrack";
import PhotoUpload from "../components/photoUpload";

function DriverProfile() {
  const [driver, setDriver] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const driverId = useParams();

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

  const [showAccidentForm, setShowAccidentForm] = useState(false);

  const toggleAccidentForm = () => {
    setShowAccidentForm(!showAccidentForm);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <main className={styles.container}>
        <div className={styles.imgholder}>
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
          <PhotoUpload />
          <p className={styles.name}>{driver.name}</p>
          <p className={styles.phoneNumber}>{driver.phoneNumber}</p>
        </div>
        <div className={styles.profileSettings}>
          <UserForm driver={driver} setDriver={setDriver} />
        </div>
        <div>
          {showAccidentForm ? (
            <AccidentForm onCancel={toggleAccidentForm} />
          ) : (
            <>
              <button onClick={toggleAccidentForm} className={styles.addButton}>
                Add Accident
              </button>
              <AccidentTrack />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default DriverProfile;