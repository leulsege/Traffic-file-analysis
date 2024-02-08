import { useEffect, useState } from "react";
import styles from "./AppNav.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function AppNav({ setDrivers, setVehicles, setTrainers }) {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleDriver = () => {
    navigate("/drivers");
  };

  const handleVehicle = () => {
    navigate("/vehicles");
  };

  const handleTraining = () => {
    navigate("/trainings");
  };
  const handleReward = () => {
    navigate("/exdrivers");
  };

  const handleAdmins = () => {
    navigate("/admins");
  };

  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (location.pathname == "/drivers" && setDrivers) {
          const sanitizedQuery = query.replace(/ /g, "-");
          const response = await fetch(
            `${
              import.meta.env.VITE_BACKEND_API
            }/drivers?fullName=${sanitizedQuery}`,
            {
              credentials: "include",
            }
          );
          const searchedResult = await response.json();
          setDrivers(searchedResult.data.drivers);
        }
        if (location.pathname == "/vehicles" && setVehicles) {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_API}/vehicles?plateNumber=${query}`,
            {
              credentials: "include",
            }
          );
          const searchedResult = await response.json();
          setVehicles(searchedResult.data.vehicles);
        }
        if (location.pathname == "/trainings" && setTrainers) {
          const sanitizedQuery = query.replace(/ /g, "-");
          const response = await fetch(
            `${
              import.meta.env.VITE_BACKEND_API
            }/trainings?fullName=${sanitizedQuery}`,
            {
              credentials: "include",
            }
          );
          const searchedResult = await response.json();
          setDrivers(searchedResult.data.drivers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data only if the query is not empty
    if (query.trim() !== "") {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.row}>
          <input
            type="text"
            id="driverNameSearch"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="ፈልግ ..."
          />
        </div>
      </nav>

      <div className={styles.grid}>
        <div onClick={handleDriver} className={styles.item}>
          <p className={styles.p}>አሽከርካሪ መመዝገቢያ</p>
        </div>
        <div onClick={handleVehicle} className={styles.item}>
          <p className={styles.p}>ተሽከርካሪ መመዝገቢያ</p>
        </div>
        <div onClick={handleTraining} className={styles.item}>
          <p className={styles.p}>ስልጠና መመዝገቢያ</p>
        </div>
        <div onClick={handleReward} className={styles.item}>
          <p className={styles.p}>የተባረሩ አሽከርካሪዎች</p>
        </div>

        {role == "owner" && (
          <div onClick={handleAdmins} className={styles.item}>
            <p className={styles.p}>አስተዳደር ፈቃድ</p>
          </div>
        )}
      </div>
    </>
  );
}

export default AppNav;
