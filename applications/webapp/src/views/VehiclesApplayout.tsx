/* eslint-disable no-unused-vars */

import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import VehiclesDisplay from "../components/VehicleDisplay";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoggedinNavBar from "../components/LoggedinNavBar";

export default function VehiclesAppLayout() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading] = useState(false);
  const [results, setResults] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Parse the 'page' query parameter to a number, defaulting to 1
  const page = parseInt(queryParams.get("page") as any) || 1;

  const handleNextPage = () => {
    const nextPage = page + 1;
    updatePage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(page - 1, 1);
    updatePage(prevPage);
  };

  const updatePage = (newPage: any) => {
    queryParams.set("page", newPage.toString());

    navigate(`?${queryParams.toString()}`);
  };

  useEffect(
    function () {
      async function fetchVehicles() {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_API}/vehicles?page=${page}`,
            {
              credentials: "include",
            }
          );
          if (response.ok) {
            const vehicleList = await response.json();
            setVehicles(vehicleList.data.vehicles);
            setResults(vehicleList.results);
          } else {
            const errorData = await response.json();
            console.log(errorData);
          }
        } catch (error) {
          console.error("Error fetching vehicles:", error);
        }
      }
      fetchVehicles();
    },
    [page]
  );

  return (
    <div className={styles.app}>
      <LoggedinNavBar />
      <Sidebar setVehicles={setVehicles} />
      {
        <VehiclesDisplay
          vehicles={vehicles}
          isLoading={isLoading}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
          results={results}
        />
      }
    </div>
  );
}
