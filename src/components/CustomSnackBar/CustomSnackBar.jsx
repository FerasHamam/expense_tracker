import { Alert, Snackbar } from "@mui/material";
import React from "react";

const CustomSnackBar = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(()=>false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          severity="success"
          onClose={handleClose}
          elevation={6}
          variant="filled"
        >
          Transaction Created Succesfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackBar;
