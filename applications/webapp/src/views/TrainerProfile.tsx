import styles from "./DriverProfile.module.css";
import TrainerForm from "../components/TrainerForm";
import LoggedinNavBar from "../components/LoggedinNavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";

function TrainerProfile() {
  const trainerId = useParams();
  const [trainer, setTrainer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const driver = (trainer as any)?.driver;

  useEffect(function () {
    async function fetchTrainer() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/trainings/${trainerId.id}`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const trainerInfo = await response.json();
          setTrainer(trainerInfo.data.training);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching trainer:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrainer();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <LoggedinNavBar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <a
            href={
              driver.photo &&
              `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                driver.photo
              }`
            }
          >
            <img
              src={
                driver.photo
                  ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/drivers/${
                      driver.photo
                    }`
                  : "/default-user-profile.jpg"
              }
              className={styles.driverImg}
            />
          </a>
          <p className={styles.name}>{driver.fullName}</p>
          <p className={styles.phoneNumber}>{driver.phoneNumber}</p>
        </div>
        <div className={styles.profileSettings}>
          <TrainerForm trainings={trainer} setTraining={setTrainer} />
        </div>
        <div>other display</div>
      </main>
    </>
  );
}

export default TrainerProfile;
