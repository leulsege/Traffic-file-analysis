import { CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#333",
        margin: "0",
      }}
    >
      <CircularProgress size={100} thickness={4} />{" "}
    </div>
  );
}

export default Spinner;
