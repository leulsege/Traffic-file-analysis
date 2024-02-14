import { useEffect, useState } from "react";
import styles from "./DriverProfile.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import VehicleForm from "../components/VehicleForm";
import LoggedinNavBar from "../components/LoggedinNavBar";

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
      <LoggedinNavBar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <img src="/vehicle.jpg" className={styles.driverImg} />
          <p className={styles.name}>{(vehicle as any).name}</p>
          <p className={styles.phoneNumber}>{(vehicle as any).phoneNumber}</p>
        </div>
        <div className={styles.profileSettings}>
          <VehicleForm vehicle={vehicle} setVehicle={setVehicle} />
        </div>

        {(vehicle as any).crashedBy ? (
          <div className={styles.driverList}>
            <p className={styles.currentPoint}>
              በዚህ መኪና አደጋ ያደረሱ አሽከርካሪዎች ዝርዝር
            </p>
            {(vehicle as any).crashedBy?.map((driver: any) => (
              <div className={styles.smallContainer}>
                <img
                  className={styles.driverImg}
                  src={
                    driver.photo
                      ? `${
                          import.meta.env.VITE_BACKEND_STATIC_FILE
                        }/img/drivers/${driver.photo}`
                      : "/default-user-profile.jpg"
                  }
                />
                <span className={styles.name}>{driver.fullName}</span>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default VehicleProfile;
