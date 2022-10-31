import { Button } from "@mui/material";
import React from "react";

const CreateButton = ({ onCreateTransaction, formData }) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      fullWidth
      onClick={onCreateTransaction}
      disabled={
        formData.amount.length < 1 ||
        formData.category.length < 1 ||
        formData.date === null ||
        formData.type.length < 1
      }
    >
      CREATE
    </Button>
  );
};

export default CreateButton;
