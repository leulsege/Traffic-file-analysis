import { Link } from "react-router-dom";
import PageNav from "../components/Navbar";
import styles from "./Login.module.css";
import { useState } from "react";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [firstName, setFirstName] = useState("Abebe");
  const [lastName, setLastName] = useState("Kebede");
  const [confirmPassword, setConfirmPassword] = useState("qwerty");

  return (
    <main className={styles.login}>
      <PageNav />
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

        <div>
          <Link className={styles.ctaLink}>Sign Up</Link>
        </div>
      </form>
    </main>
  );
}
