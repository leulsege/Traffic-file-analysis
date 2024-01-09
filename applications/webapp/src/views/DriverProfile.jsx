import React from "react";
import styles from "./DriverProfile.module.css";
import UserForm from "../components/UserForm";
import { useState } from "react";

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
  return (
    <>
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <img src="driver.jpg" className={styles.driverImg} />
          <p className={styles.name}>
            {driverinf.firstName} {driverinf.lastName}
          </p>
          <p className={styles.phoneNumber}>{driverinf.phoneNumber}</p>
        </div>
        <div className={styles.profileSettings}>
          <UserForm driver={driverinf} />
        </div>
        <div>Another User Details</div>
      </main>
    </>
  );
}

export default DriverProfile;
