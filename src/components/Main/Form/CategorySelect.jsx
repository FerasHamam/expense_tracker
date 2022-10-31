import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

import React from "react";
import {
  expenseCategories,
  incomeCategories,
} from "../../../constants/constants";

const CategorySelect = ({
  category,
  categoryError,
  type,
  setFormData,
  setFormError,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel color="secondary">Category</InputLabel>
      <Select
        variant="standard"
        autoWidth
        color="secondary"
        value={category}
        error={categoryError}
        disabled={type === ""}
        onChange={(event) => {
          const value = event.target.value;
          if (value === null) {
            setFormError((prevFormError) => ({
              ...prevFormError,
              category: true,
            }));
            return;
          } else if (categoryError)
            setFormError((prevFormError) => ({
              ...prevFormError,
              category: false,
            }));
          setFormData((prevFormData) => ({ ...prevFormData, category: value }));
        }}
      >
        {type=== "Income"
          ? incomeCategories.map((category) => (
              <MenuItem key={category.type} value={category}>
                {category.type}
              </MenuItem>
            ))
          : expenseCategories.map((category) => (
              <MenuItem key={category.type} value={category}>
                {category.type}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
