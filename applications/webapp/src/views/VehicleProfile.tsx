import React, { useEffect, useState } from "react";
import styles from "./DriverProfile.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import VehicleForm from "../components/VehicleForm";

function VehicleProfile() {
  const [vehicle, setVehicle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const vehicleId = useParams();

  useEffect(function () {
    async function fetchVehicle() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/vehicles/${vehicleId.id}`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const vehicleInfo = await response.json();
          setVehicle(vehicleInfo.data.vehicle);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching vehicle:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchVehicle();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <img src="/vehicle.jpg" className={styles.vehicleImg} />
          <p className={styles.name}>{vehicle.name}</p>
          <p className={styles.phoneNumber}>{vehicle.phoneNumber}</p>
        </div>
        <div className={styles.profileSettings}>
          <VehicleForm vehicle={vehicle} setVehicle={setVehicle} />
        </div>
      </main>
    </>
  );
}

export default VehicleProfile;
