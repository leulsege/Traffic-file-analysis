import React from "react";
import styles from "./DriverProfile.module.css";
import { useState } from "react";
import TrainerForm from "../components/TrainerForm";
import LoggedinNavBar from "../components/LoggedinNavBar";
const res = {
  data: {
    trainings: {
      _id: "659722c69235c356e0646486",
      trainingType: "Hazardous Materials",
      trainingStartDate: "2023-06-18T00:00:00.000Z",
      trainingEndDate: "2023-06-20T00:00:00.000Z",
      trainingPassPoint: 85,
      trainingResult: 92,
      checkUp: "Passed",
      driver: {
        photo: null,
        phoneNumber: "0912121212",
        _id: "659706571e689e586452981d",
        name: "Charlie Brown",
        licenseLevel: "Class C",
        licenseNumber: "GHI123",
        licenseExpiredDate: "2022-06-18T00:00:00.000Z",
        gender: "Male",
        commencementDate: "2018-11-30T00:00:00.000Z",
        age: 38,
        idNumber: "678901234",
        __v: 0,
        id: "659706571e689e586452981d",
      },
      __v: 0,
    },
  },
};
const driverinf = res.data.trainings.driver;
console.log(driverinf, "from training inf");

function TrainerProfile() {
  return (
    <>
      <LoggedinNavBar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <img src="driver.jpg" className={styles.driverImg} />
          <p className={styles.name}>{driverinf.name}</p>
          <p className={styles.phoneNumber}>{driverinf.phoneNumber}</p>
        </div>
        <div className={styles.profileSettings}>
          <TrainerForm trainings={res.data.trainings} />
        </div>
        <div>other display</div>
      </main>
    </>
  );
}

export default TrainerProfile;
