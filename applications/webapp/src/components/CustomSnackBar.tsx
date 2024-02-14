// CustomSnackbar.js
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CustomSnackbar = ({ open, onClose, message, severity }: any) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000} // Adjust as needed
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <MuiAlert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
        style={{ width: "300px", fontSize: "16px" }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;
