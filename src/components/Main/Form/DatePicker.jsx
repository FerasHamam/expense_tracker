import { TextField } from "@mui/material";
import React from "react";

const DatePicker = ({ dateError, date, setFormData, setFormError }) => {
  return (
    <TextField
      label="Date"
      type="date"
      fullWidth
      color="secondary"
      InputLabelProps={{ shrink: true }}
      inputProps={{ max: new Date() }}
      value={date !== null ? date : new Date()}
      error={dateError}
      helperText={dateError === true ? "Please enter a valid date" : ""}
      onChange={(event) => {
        const value = event.target.value;
        if ( Date(value) === NaN  || value === null || value.length === 0 || value === "") {
          setFormError((prevFormError) => ({
            ...prevFormError,
            date: true,
          }));
        } else {
          setFormError((prevFormError) => ({
            ...prevFormError,
            date: false,
          }));
        }
        setFormData((prevFormData) => ({
          ...prevFormData,
          date: value,
        }));
      }}
    ></TextField>
  );
};

export default DatePicker;
