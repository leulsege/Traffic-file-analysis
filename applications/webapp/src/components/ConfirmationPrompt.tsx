// ConfirmationPrompt.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Typography } from "@mui/material";

const ConfirmationPrompt = ({ onConfirm, onCancel, children }: any) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    onCancel();
    setShowConfirmation(false);
  };

  return (
    <div>
      {children &&
        React.cloneElement(children, {
          onClick: () => setShowConfirmation(true),
        })}

      <Dialog
        open={showConfirmation}
        onClose={handleCancel}
        maxWidth="md"
        PaperProps={{
          sx: {
            width: "500px",
            height: "70px",
            fontSize: "2rem",
          },
        }}
      >
        <DialogContent sx={{ padding: "0px", margin: "0px" }}>
          <DialogContentText
            sx={{
              paddingLeft: "10px",
              paddingTop: "10px",
              margin: "1px",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "16px" }}>
              Are you sure you want to Continue?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: "0px", margin: "0px" }}>
          <Button onClick={handleCancel} color="primary">
            <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
              No
            </Typography>
          </Button>
          <Button onClick={handleConfirm} color="primary">
            <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
              Yes
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfirmationPrompt.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ConfirmationPrompt;
