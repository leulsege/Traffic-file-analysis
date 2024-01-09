/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Display from "../components/Display";

export default function AppLayout() {
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:9000/users";

  useEffect(function () {
    async function fetchDrivers() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        setDrivers(data);
      } catch {
        alert("there was an error loading data...");
      } finally {
        setIsLoading(false);
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
