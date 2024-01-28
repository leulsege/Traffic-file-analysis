import styles from "./AdminForm.module.css";
import { useState } from "react";

function AdminForm({ admin, setAdmin }) {
  const [firstName, setFirstName] = useState(admin.firstName);
  const [lastName, setLastName] = useState(admin.lastName);

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
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
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
  }

  return (
    <>
      <main className={styles.login}>
        <form className={styles.form}>
          <div className={styles.row}>
            <label htmlFor="text">Fist Name</label>
            <input
              type="text"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="text">Last Name</label>
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
            <button className={styles.updbtn} onClick={handleUpdate}>
              update profile
            </button>
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
