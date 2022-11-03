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
      sx={{
        "& input[type=number]": {
          MozAppearance: "textfield",
        },
        "& input[type=number]::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
      }}
      onChange={(event) => {
        let amount = event.target.value;
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
        setFormData((prevFormData) => ({
          ...prevFormData,
          amount: Number(amount) || "",
        }));
      }}
    ></TextField>
  );
};

export default AmountField;
