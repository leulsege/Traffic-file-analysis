/* eslint-disable no-unused-vars */

import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import VehiclesDisplay from "../components/VehicleDisplay";
import { useEffect, useState } from "react";

export default function VehiclesAppLayout() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchVehicles() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/vehicles`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const vehicleList = await response.json();
          setVehicles(vehicleList.data.vehicles);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    }
    fetchVehicles();
  }, []);

  return (
    <div className={styles.app}>
      <Sidebar setVehicles={setVehicles} />
      {<VehiclesDisplay vehicles={vehicles} isLoading={isLoading} />}
    </div>
  );
}
