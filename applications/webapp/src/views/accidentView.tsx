import React from "react";
import styles from "./AccidentView.module.css";
import { useState } from "react";
import AccidentViewForm from "../components/AccidentViewForm";
import PhotoUpload from "../components/photoUpload";

const res = {
  data: {
    accident_date: "2022-01-23T12:34:56.789Z",
    accident_place: "City, Country",
    damages: "Minor damage to the rear bumper",
    cause: "Rear-end collision",
    guilty: "Other driver",
    damageEstimation: 1500,
    insuranceSentDate: "2022-01-25T00:00:00.000Z",
    excessLetterDate: "2022-02-01T00:00:00.000Z",
    maintenanceProcess: "Body repair and painting",
    preformDate: "2022-02-10T00:00:00.000Z",
    paymentDateLetterNumber: "ABC123",
    paymentRequestLetterDate: "2022-02-15T00:00:00.000Z",
    givenPoint: 10,
    reducedPoint: 0,
    givenDecision: "Compensation granted",
    photo: null,
    driver: {
      _id: "659706741e689e5864529823",
      name: "Samuel Lee",
      licenseLevel: "Class B",
      licenseNumber: "UVW789",
      licenseExpiredDate: "2024-04-03T00:00:00.000Z",
      gender: "Male",
      commencementDate: "2016-12-12T00:00:00.000Z",
      age: 42,
      idNumber: "890123456",
      __v: 0,
      photo: "driver-659706741e689e5864529823-1704468487049.jpeg",
      id: "659706741e689e5864529823",
    },
    vehicle: {
      _id: "65971f1eddd2d5c29a602a95",
      vehicleType: "Van",
      PlateNumber: 567,
      MoterNumber: 890,
      chanciNumber: 123,
      sideNumber: 141,
      pmServiceTime: 9000,
      bmServiceTime: 18000,
      startingPoint: "City F",
      destination: "City G",
      stayingPlace: "City H",
      driver: {
        photo: null,
        _id: "659706491e689e586452981a",
        name: "Eva Martinez",
        licenseLevel: "Class B",
        licenseNumber: "MNO789",
        licenseExpiredDate: "2024-11-12T00:00:00.000Z",
        gender: "Female",
        commencementDate: "2020-07-05T00:00:00.000Z",
        age: 29,
        idNumber: "234567890",
        __v: 0,
        id: "659706491e689e586452981a",
      },
    },
  },
};

function AccidentView() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <img src="accident.png" className={styles.accidentImg} />
          <PhotoUpload />
        </div>
        <div className={styles.profileSettings}>
          <AccidentViewForm accidentData={res.data} />
        </div>
        <div>other display</div>
      </main>
    </>
  );
}

export default AccidentView;
