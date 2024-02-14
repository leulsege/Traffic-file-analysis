import PageNav from "../components/Navbar";
import styles from "./Signup.module.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Message from "../components/Message";
import Spinner from "../components/Spinner";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
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
        `${import.meta.env.VITE_BACKEND_API}/admins/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
            confirmPassword,
          }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMessage((data as any).message);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Sign up failed");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setError("An error occurred while signing up" as any);
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
              <label htmlFor="text"></label>
              <input
                type="text"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value as any)}
                value={firstName}
                required
                placeholder="First Name"
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="text"></label>
              <input
                type="text"
                id="lastName"
                onChange={(e) => setLastName(e.target.value as any)}
                value={lastName}
                required
                placeholder="Last Name"
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value as any)}
                value={email}
                required
                placeholder="Email address"
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value as any)}
                value={password}
                required
                placeholder="Password"
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value as any)}
                value={confirmPassword}
                required
                placeholder="Comfirm Password"
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
