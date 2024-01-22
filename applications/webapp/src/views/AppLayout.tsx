/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Display from "../components/Display";
import { Navigate } from "react-router";

export default function AppLayout() {
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchDrivers() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/drivers`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const driverList = await response.json();
          setDrivers(driverList.data.drivers);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching driver:", error);
      }
    }
    fetchDrivers();
  }, []);

  return (
    <div className={styles.app}>
      <Sidebar />
      <Display drivers={drivers} isLoading={isLoading} />
    </div>
  );
}
