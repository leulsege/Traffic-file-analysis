/* eslint-disable no-unused-vars */

import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import VehiclesDisplay from "../components/VehicleDisplay";
import { useState } from "react";

const apiData = {
  status: "success",
  results: 12,
  data: {
    vehicles: [
      {
        _id: "6595710bb1bc0bf300b7ddf5",
        vehicleType: "Car",
        PlateNumber: 123456,
        MoterNumber: 789012,
        chanciNumber: 345678,
        sideNumber: 901234,
        pmServiceTime: 5000,
        bmServiceTime: 10000,
        others: "Additional information about the vehicle",
        startingPoint: "Starting point",
        destination: "Destination",
        stayingPlace: "Staying place",
        driver: null,
        __v: 0,
        history: [],
      },
      {
        _id: "65971e72ddd2d5c29a602a8c",
        vehicleType: "Car",
        PlateNumber: 123,
        MoterNumber: 456,
        chanciNumber: 789,
        sideNumber: 101,
        pmServiceTime: 5000,
        bmServiceTime: 10000,
        others: "Additional information",
        startingPoint: "City A",
        destination: "City B",
        stayingPlace: "City C",
        driver: {
          photo: null,
          _id: "659705fc1e689e586452980e",
          name: "John Doe",
          licenseLevel: "Class A",
          licenseNumber: "ABC123",
          licenseExpiredDate: "2024-12-31T00:00:00.000Z",
          gender: "Male",
          commencementDate: "2020-01-01T00:00:00.000Z",
          age: 30,
          idNumber: "123456789",
          __v: 0,
          id: "659705fc1e689e586452980e",
        },
        __v: 0,
        history: [],
      },
    ],
  },
};

console.log(apiData.data.vehicles);

export default function VehiclesAppLayout() {
  const [vehicles, setVehicles] = useState(apiData.data.vehicles);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.app}>
      <Sidebar />
      {<VehiclesDisplay vehicles={vehicles} isLoading={isLoading} />}
    </div>
  );
}
