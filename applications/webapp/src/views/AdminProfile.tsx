import styles from "./DriverProfile.module.css";
import AdminForm from "../components/owner/AdminForm";
import LoggedinNavBar from "../components/LoggedinNavBar";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import PhotoUpload from "../components/photoUpload";

function AdminProfile() {
  const [admin, setAdmin] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchAdmin() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/admins/me`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const adminInfo = await response.json();
          setAdmin(adminInfo.data.user);
        } else {
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.error("Error fetching admin:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAdmin();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <LoggedinNavBar />
      <main className={styles.container}>
        <div className={styles.imgholder}>
          <a
            href={
              (admin as any).photo &&
              `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/admins/${
                (admin as any).photo
              }`
            }
          >
            <img
              src={
                (admin as any).photo
                  ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/admins/${
                      (admin as any).photo
                    }`
                  : "/default-user-profile.jpg"
              }
              className={styles.driverImg}
            />
          </a>
          <p className={styles.name}>
            {(admin as any).firstName} {(admin as any).lastName}
          </p>
          <p className={styles.phoneNumber}>{(admin as any).role}</p>
          <PhotoUpload url={`admins/uploadphoto`} setProfile={setAdmin} />
        </div>
        <div className={styles.profileSettings}>
          <AdminForm admin={admin} setAdmin={setAdmin} />
        </div>
        <div>other display</div>
      </main>
    </>
  );
}

export default AdminProfile;
