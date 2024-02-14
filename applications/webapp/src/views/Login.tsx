import { useNavigate, Link } from "react-router-dom";
import PageNav from "../components/Navbar";
import styles from "./Login.module.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Login({ setIsAuthenticated }: any) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/admins/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setIsAuthenticated(true);

        const expirationTime = new Date();
        expirationTime.setMonth(expirationTime.getMonth() + 2);

        const authData = {
          expirationTime: expirationTime.getTime(),
        };

        localStorage.setItem("authData", JSON.stringify(authData));
        localStorage.setItem("role", userData?.data?.user.role);

        navigate("/drivers");
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

        <div className={styles.row}>
          <label htmlFor="password"></label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => setPassword(e.target.value as any)}
            value={password}
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className={styles.logButton}
          onClick={handleSubmit}
        >
          Login
        </button>
        <Link to="/forgot-password">
          <div className={styles.forget}>forgot password?</div>
        </Link>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
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
