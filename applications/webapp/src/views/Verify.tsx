import { useState, useEffect } from "react";
import Message from "../components/Message";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import styles from "./Verify.module.css";

const Verify = () => {
  const [message, setMessage] = useState();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/admins/verify/${token}`
        );
        if (response.ok) {
          const responseData = await response.json();
          setMessage(responseData.message);
          setSuccess(true);
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Verification failed");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error("Verification error:", error);
        setError("An error occurred during verification" as any);
        setSnackbarOpen(true);
      }
    };

    fetchData();
  }, [token]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <main className={styles.main}>
      <Navbar />
      {success ? (
        <Message message={message} />
      ) : (
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
      )}
    </main>
  );
};

export default Verify;
