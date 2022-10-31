import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const AmountField = ({ amount, amountError, setFormData, setFormError }) => {
  return (
    <TextField
      label="Amount"
      type="number"
      fullWidth
      color="secondary"
      value={amount}
      error={amountError}
      helperText={amountError === true ? "Please enter positive Amount " : ""}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      onChange={(event) => {
        let value = event.target.value;
        if (
          Number.isNaN(Number(amount)) ||
          amount === "" ||
          amount === null ||
          Number(amount) <= 0
        ) {
          setFormError((prevFormError) => ({ ...prevFormError, amount: true }));
        } else
          setFormError((prevFormError) => ({
            ...prevFormError,
            amount: false,
          }));
        setFormData((prevFormData) => ({ ...prevFormData, amount: value }));
      }}
    ></TextField>
  );
};

export default AmountField;
