import { useNavigate, useParams } from "react-router-dom";
import styles from "./AdminForm.module.css";
import ConfirmationPrompt from "../ConfirmationPrompt";

function ApproveAdminForm({ admin, setAdmin }: any) {
  const adminId = useParams();
  const navigate = useNavigate();

  async function handleApprove() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/admins/${adminId.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            approved: true,
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

  async function handleDelete() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/admins/${adminId.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        navigate("/admins");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error fetching admin:", error);
    }
  }

  return (
    <>
      <main className={styles.login}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <label htmlFor="text">ሙሉ ስም</label>
            <span>
              {admin.firstName} {admin.lastName}
            </span>
          </div>

          <div className={styles.row}>
            <label htmlFor="text">Email</label>
            <span> {admin.email}</span>
          </div>

          <div className={styles.buttons}>
            {!admin.approved && (
              <button className={styles.updbtn} onClick={handleApprove}>
                Approve
              </button>
            )}
            <ConfirmationPrompt
              onConfirm={handleDelete}
              onCancel={() => console.log("Deletion canceled")}
            >
              <button className={styles.delbtn}>Delete</button>
            </ConfirmationPrompt>
          </div>
        </form>
      </main>
    </>
  );
}

export default ApproveAdminForm;
