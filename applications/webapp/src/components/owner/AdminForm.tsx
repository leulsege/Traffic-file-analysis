import { useNavigate } from "react-router-dom";
import styles from "./AdminForm.module.css";
import { useState } from "react";
import CustomSnackbar from "../CustomSnackBar";

function AdminForm({ admin, setAdmin }: any) {
  const [firstName, setFirstName] = useState(admin.firstName);
  const [lastName, setLastName] = useState(admin.lastName);
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  async function handleUpdate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/admins/updateme`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const adminInfo = await response.json();
        setAdmin(adminInfo.data.user);
        setSnackbarMessage("Profile Updated Successfully!");
        setSnackbarSeverity("success");
        setShowSnackbar(true);
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.message);
        setSnackbarSeverity("error");
        setShowSnackbar(true);
        console.log(errorData);
      }
    } catch (error) {
      setSnackbarMessage("unknown error");
      setSnackbarSeverity("success");
      setShowSnackbar(true);
      console.error("Error fetching admin:", error);
    }
  }

  function handleLogout() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
      const [name, _] = cookie.split("=");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <main className={styles.login}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <label htmlFor="text">ስም</label>
            <input
              type="text"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="text">የአባት ስም</label>
            <input
              type="text"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="text">Email</label>
            <span> {admin.email}</span>
          </div>

          <div className={styles.buttons}>
            <div>
              <button className={styles.updbtn} onClick={handleUpdate}>
                Save Profile
              </button>
              <CustomSnackbar
                open={showSnackbar}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                severity={snackbarSeverity}
              />
            </div>
            <button className={styles.delbtn} onClick={handleLogout}>
              Log out
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default AdminForm;
