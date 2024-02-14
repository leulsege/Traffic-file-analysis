import { useEffect } from "react";
import styles from "./AccidentView.module.css";
import { useState } from "react";
import AccidentViewForm from "../components/AccidentViewForm";
import PhotoUpload from "../components/photoUpload";
import LoggedinNavbar from "../components/LoggedinNavBar";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function AccidentView() {
  const [accident, setAccident] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const accidentId = useParams();

  useEffect(function () {
    async function fetchAdmin() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/vehicleaccidents/${
            accidentId.id
          }`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const accidentInfo = await response.json();
          setAccident(accidentInfo.data.vehicleAccident);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching accident:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAdmin();
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <>
      <LoggedinNavbar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <a
            href={
              (accident as any).photo &&
              `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/accidents/${
                (accident as any).photo
              }`
            }
          >
            <img
              src={
                (accident as any).photo
                  ? `${
                      import.meta.env.VITE_BACKEND_STATIC_FILE
                    }/img/accidents/${(accident as any).photo}`
                  : "/default-accident.png"
              }
              className={styles.driverImg}
            />
          </a>
          <PhotoUpload
            url={`vehicleaccidents/uploadphoto/${accidentId.id}`}
            setProfile={setAccident}
          />
          <p className={styles.reducedPoint}>
            -{(accident as any).reducedPoint}
          </p>
        </div>
        <div className={styles.profileSettings}>
          <AccidentViewForm accidentData={accident} setAccident={setAccident} />
        </div>
        <div>other display</div>
      </main>
    </>
  );
}

export default AccidentView;
