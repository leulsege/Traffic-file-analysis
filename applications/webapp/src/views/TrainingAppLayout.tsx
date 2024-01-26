/* eslint-disable no-unused-vars */

import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import TrainersDisplay from "../components/TrainersDisplay";
import { useState } from "react";

const apiData = {
  status: "success",
  results: 6,
  data: {
    trainings: [
      {
        _id: "659722c69235c356e0646486",
        trainingType: "Hazardous Materials",
        trainingStartDate: "2023-06-18T00:00:00.000Z",
        trainingEndDate: "2023-06-20T00:00:00.000Z",
        trainingPassPoint: 85,
        trainingResult: 92,
        checkUp: "Passed",
        driver: {
          photo: null,
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
      {
        _id: "659722d39235c356e0646489",
        trainingType: "First Aid",
        trainingStartDate: "2023-04-20T00:00:00.000Z",
        trainingEndDate: "2023-04-22T00:00:00.000Z",
        trainingPassPoint: 75,
        trainingResult: 85,
        checkUp: "Passed",
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
        __v: 0,
      },
    ],
  },
};

console.log(apiData.data.trainings);

export default function TrainingAppLayout() {
  const [trainers, setTrainers] = useState(apiData.data.trainings);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.app}>
      <Sidebar />
      {<TrainersDisplay trainers={trainers} isLoading={isLoading} />}
    </div>
  );
}
