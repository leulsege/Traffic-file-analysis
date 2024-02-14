import PageNav from "../components/Navbar";
import styles from "./ForgetPassword.module.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Message from "../components/Message";
import Spinner from "../components/Spinner";

export default function ForgetPassword() {
  const [email, setEmail] = useState();
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/admins/forget-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setMessage((userData as any).message);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "sending email failed");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("sending email error:", error);
      setError("An error occurred while sending email" as any);
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <main className={styles.login}>
      <PageNav />
      {success ? (
        <Message message={message} />
      ) : (
        <>
          <form className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="email"></label>
              <input
                type="email"
                required
                id="email"
                onChange={(e) => setEmail(e.target.value as any)}
                value={email}
                placeholder="Email address"
              />
            </div>

            <button
              type="submit"
              className={styles.logButton}
              onClick={handleSubmit}
            >
              Next
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
        </>
      )}
    </main>
  );
}
