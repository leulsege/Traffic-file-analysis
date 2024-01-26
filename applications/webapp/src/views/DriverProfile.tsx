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
      _id: "65b1a919841ea75e78f986fb",
      fullName: "John Doe",
      licenseLevel: "Class A",
      licenseNumber: "ABC123",
      licenseExpiredDate: "2024-12-31T23:59:59.999Z",
      gender: "Male",
      phoneNumber: "1234567890",
      commencementDate: "2020-01-01T00:00:00.000Z",
      birthDate: "1990-01-01T00:00:00.000Z",
      idNumber: "123456789",
      givenPoint: 10,
      photo: null,
      vehicle: {
        _id: "65971e72ddd2d5c29a602a8c",
        vehicleType: "Car",
        MoterNumber: 456,
        chanciNumber: "789",
        sideNumber: "101",
        pmServiceTime: 5001,
        bmServiceTime: 10000,
        others: "Additional informati",
        startingPoint: "City A",
        destination: "City B",
        stayingPlace: "City C",
        __v: 0,
        moterNumber: "5768976",
        plateNumber: "123",
      },
      __v: 0,
      currentPoint: 4,
      accidentRecord: [
        {
          _id: "65b1aa8fd25d3e3b31bc1190",
          accidentDate: "2023-01-15T12:30:00.000Z",
          accidentPlace: "City Center",
          damages: "Minor damages to the front bumper",
          cause: "Traffic collision",
          guilty: "Other driver",
          damageEstimation: 1000,
          insuranceSentDate: "2023-01-20T00:00:00.000Z",
          excessLetterDate: "2023-01-25",
          maintenanceProcess: "Body repair and paint",
          preformDate: "2023-02-01T08:00:00.000Z",
          paymentDateLetterNumber: "ABC123",
          paymentRequestLetterDate: "2023-02-10T00:00:00.000Z",
          reducedPoint: 2,
          givenDecision: "Compensation granted",
          photo: "accident.png",
          vehicle: {
            _id: "65971e72ddd2d5c29a602a8c",
            vehicleType: "Car",
            MoterNumber: 456,
            chanciNumber: "789",
            sideNumber: "101",
            pmServiceTime: 5001,
            bmServiceTime: 10000,
            others: "Additional informati",
            startingPoint: "City A",
            destination: "City B",
            stayingPlace: "City C",
            __v: 0,
            moterNumber: "5768976",
            plateNumber: "123",
          },
        },
        {
          _id: "65b1bfd110be33f5278d7298",
          accidentDate: "2023-01-15T12:30:00.000Z",
          accidentPlace: "City Center",
          damages: "Minor damages to the front bumper",
          cause: "Traffic collision",
          guilty: "Other driver",
          damageEstimation: 1000,
          insuranceSentDate: "2023-01-20T00:00:00.000Z",
          excessLetterDate: "2023-01-25",
          maintenanceProcess: "Body repair and paint",
          preformDate: "2023-02-01T08:00:00.000Z",
          paymentDateLetterNumber: "ABC123",
          paymentRequestLetterDate: "2023-02-10T00:00:00.000Z",
          reducedPoint: 4,
          givenDecision: "Compensation granted",
          photo: "accident.png",
          vehicle: {
            _id: "65971e72ddd2d5c29a602a8c",
            vehicleType: "Car",
            MoterNumber: 456,
            chanciNumber: "789",
            sideNumber: "101",
            pmServiceTime: 5001,
            bmServiceTime: 10000,
            others: "Additional informati",
            startingPoint: "City A",
            destination: "City B",
            stayingPlace: "City C",
            __v: 0,
            moterNumber: "5768976",
            plateNumber: "123",
          },
        },
      ],
      id: "65b1a919841ea75e78f986fb",
    },
  },
};

const driverinf = driver.data.driver;
const accidents = driver.data.driver.accidentRecord;

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
          <p className={styles.name}>{driverinf.fullName}</p>
          <p className={styles.phoneNumber}>{driverinf.phoneNumber}</p>
          <div>
            <span className={styles.currentPoint}>
              {driverinf.currentPoint}
            </span>
          </div>
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
              <AccidentTrack accidents={accidents} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default DriverProfile;
