import React from "react";
import styles from "./DriverProfile.module.css";
import UserForm from "../components/UserForm";
import AccidentTrack from "../components/accidentTrack";
import { useState } from "react";
import LoggedinNavBar from "../components/LoggedinNavBar";
import PhotoUpload from "../components/photoUpload";
import AccidentForm from "../components/AccidentForm";

const driver = {
  status: "success",
  data: {
    driver: {
      photo: null,
      _id: "6597068f1e689e5864529829",
      firstName: "Daniel",
      lastName: "Kim",
      phoneNumber: "0962626212",
      licenseLevel: "Class A",
      licenseNumber: "ABC789",
      licenseExpiredDate: "2022-08-14T00:00:00.000Z",
      gender: "Male",
      commencementDate: "2019-11-10T00:00:00.000Z",
      age: 33,
      idNumber: "567890234",
      __v: 0,
      vehicle: [
        {
          _id: "6597200fddd2d5c29a602a9e",
          vehicleType: "Moped",
          PlateNumber: 123,
          MoterNumber: 456,
          chanciNumber: 789,
          sideNumber: 191,
          pmServiceTime: 14000,
          bmServiceTime: 28000,
          startingPoint: "City Z",
          destination: "City A",
          stayingPlace: "City B",
          history: [],
        },
      ],
      faultRecord: [],
      id: "6597068f1e689e5864529829",
    },
  },
};

const driverinf = driver.data.driver;

function DriverProfile() {
  const [showAccidentForm, setShowAccidentForm] = useState(false);

  const toggleAccidentForm = () => {
    setShowAccidentForm(!showAccidentForm);
  };

  return (
    <>
      <LoggedinNavBar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <img src="driver.jpg" className={styles.driverImg} />
          <PhotoUpload />
          <p className={styles.name}>
            {driverinf.firstName} {driverinf.lastName}
          </p>
          <p className={styles.phoneNumber}>{driverinf.phoneNumber}</p>
        </div>
        <div className={styles.profileSettings}>
          <UserForm driver={driverinf} />
        </div>
        <div className={styles.formHolder}>
          {showAccidentForm ? (
            <>
              <button onClick={toggleAccidentForm} className={styles.addButton}>
                Back
              </button>
              <AccidentForm onCancel={toggleAccidentForm} />
            </>
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
