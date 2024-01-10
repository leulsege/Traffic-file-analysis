import { Link, useNavigate } from "react-router-dom";
import PageNav from "../components/Navbar";
import styles from "./Login.module.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Message from "../components/Message";

export default function Signup() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [firstName, setFirstName] = useState("Abebe");
  const [lastName, setLastName] = useState("Kebede");
  const [confirmPassword, setConfirmPassword] = useState("qwerty");
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/admins/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          confirmPassword,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setMessage((data as any).message);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in" as any);
      setSnackbarOpen(true);
    }
  };

  return (
    <main className={styles.login}>
      <PageNav />
      {success ? (
        <Message message={message} />
      ) : (
        <>
          <form className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="text">First Name</label>
              <input
                type="text"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="text">Last Name</label>
              <input
                type="text"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="password">Comfirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>

            <button
              type="submit"
              className={styles.logButton}
              onClick={handleSubmit}
            >
              signup
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
