import React from "react";
import styles from "./AccidentView.module.css";
import { useState } from "react";
import AccidentViewForm from "../components/AccidentViewForm";
import PhotoUpload from "../components/photoUpload";
import LoggedinNavbar from "../components/LoggedinNavBar";

const res = {
  data: {
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
};

function AccidentView() {
  return (
    <>
      <LoggedinNavbar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <img src="accident.png" className={styles.accidentImg} />
          <PhotoUpload />
          <p className={styles.reducedPoint}>-{res.data.reducedPoint}</p>
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
