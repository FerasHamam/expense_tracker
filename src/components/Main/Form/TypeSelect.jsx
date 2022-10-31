import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import { types } from "../../../constants/constants";

const TypeSelect = ({ type, typeError, setFormData, setFormError }) => {
  return (
    <FormControl fullWidth>
      <InputLabel color="secondary">Type</InputLabel>
      <Select
        variant="standard"
        autoWidth
        color="secondary"
        value={type}
        error={typeError}
        onChange={(event) => {
          const value = event.target.value;
          if (value === null) {
            setFormError((prevFormError) => ({
              ...prevFormError,
              type: true,
              touched: true,
            }));
            return;
          }
          if (typeError)
            setFormError((prevFormError) => ({
              ...prevFormError,
              type: false,
            }));
          setFormData((prevFormData) => ({
            ...prevFormData,
            type: value,
          }));
        }}
      >
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TypeSelect;
