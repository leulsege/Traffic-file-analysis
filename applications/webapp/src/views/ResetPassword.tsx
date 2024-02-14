import { useNavigate, useParams } from "react-router-dom";
import PageNav from "../components/Navbar";
import styles from "./Login.module.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function ResetPassword() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/admins/reset-password/${token}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, confirmPassword }),
        }
      );
      if (response.ok) {
        navigate("/drivers");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "reset password failed");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("reset password error:", error);
      setError("An error occurred while reseting password " as any);
      setSnackbarOpen(true);
    }
  };

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => setPassword(e.target.value as any)}
            value={password}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            required
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value as any)}
            value={confirmPassword}
          />
        </div>

        <button
          type="submit"
          className={styles.logButton}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleSnackbarClose}
          style={{ width: "300px", fontSize: "16px" }}
        >
          {error}
        </MuiAlert>
      </Snackbar>
    </main>
  );
}
