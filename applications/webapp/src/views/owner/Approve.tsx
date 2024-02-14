/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import styles from "./Approve.module.css";
import AdminDisplay from "../../components/owner/AdminDisplay";
import LoggedinNavBar from "../../components/LoggedinNavBar";

export default function AppLayout() {
  const [admins, setAdmins] = useState([]);
  const [isLoading] = useState(false);

  useEffect(function () {
    async function fetchAdmins() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/admins`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const adminList = await response.json();
          setAdmins(adminList.data.users);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    }
    fetchAdmins();
  }, []);

  return (
    <div className={styles.app}>
      <LoggedinNavBar />
      <Sidebar />
      <AdminDisplay admins={admins} isLoading={isLoading} />
    </div>
  );
}
