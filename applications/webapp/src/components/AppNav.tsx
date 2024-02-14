import { useEffect, useState } from "react";
import styles from "./AppNav.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function AppNav({ setDrivers, setVehicles, setExDrivers }: any) {
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
  const handleExDrivers = () => {
    navigate("/exdrivers");
  };
  const handleExTrainers = () => {
    navigate("/extrainers");
  };
  const handletopDrivers = () => {
    navigate("/topdrivers");
  };

  const handleAdmins = () => {
    navigate("/admins");
  };

  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (location.pathname == ("/drivers" || "/exdrivers") && setDrivers) {
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

        if (location.pathname == "/exdrivers" && setExDrivers) {
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
          setExDrivers(searchedResult.data.drivers);
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

  if (loading) return <Spinner />;

  return (
    <>
      <nav className={styles.nav}>
        {location.pathname !== "/admins" &&
          location.pathname !== "/topdrivers" &&
          location.pathname !== "/trainings" &&
          location.pathname !== "/extrainers" &&
          location.pathname !== "/topdrivers" && (
            <div className={styles.row}>
              <input
                type="text"
                id="driverNameSearch"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="ፈልግ ..."
              />
            </div>
          )}
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
        <div onClick={handleExTrainers} className={styles.item}>
          <p className={styles.p}>ከዚህ በፊት ስልጠና የወሰዱ</p>
        </div>
        <div onClick={handleExDrivers} className={styles.item}>
          <p className={styles.p}>የተሰናበቱ አሽከርካሪዎች</p>
        </div>
        <div onClick={handletopDrivers} className={styles.item}>
          <p className={styles.p}>ምንም አደጋ ያላደረሱ</p>
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
