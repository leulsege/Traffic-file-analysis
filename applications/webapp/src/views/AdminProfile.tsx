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
              admin.photo &&
              `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/admins/${
                admin.photo
              }`
            }
          >
            <img
              src={
                admin.photo
                  ? `${import.meta.env.VITE_BACKEND_STATIC_FILE}/img/admins/${
                      admin.photo
                    }`
                  : "/default-user-profile.jpg"
              }
              className={styles.driverImg}
            />
          </a>
          <p className={styles.name}>
            {admin.firstName} {admin.lastName}
          </p>
          <p className={styles.phoneNumber}>{admin.role}</p>
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
