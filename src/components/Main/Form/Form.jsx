import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useExpenseTrackerContext } from "../../../context/Context";
import { v4 as uuidv4 } from "uuid";
import {
  types,
  expenseCategories,
  incomeCategories,
} from "../../../constants/constants";
import formatDate from "../../../utils/formatDate";
const initialFormData = {
  type: "",
  category: "",
  amount: "",
  date: new Date(),
};
const initialFormError = {
  type: false,
  category: false,
  amount: false,
  date: false,
};
const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const { addTransaction } = useExpenseTrackerContext();
  const onCreateTransaction = () => {
    if (
      formError.amount ||
      formError.category ||
      formError.date ||
      formError.type
    )
      return;
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
      date: formatDate(formData.date),
    });
    setFormData(initialFormData);
    setFormError(initialFormError);
  };

  return (
    <div>
      <Grid container direction="row" align="center" spacing={2}>
        <Grid item xs={12}>
          ...
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel color="secondary">Type</InputLabel>
            <Select
              variant="standard"
              autoWidth
              color="secondary"
              value={formData.type}
              error={formError.type}
              onChange={(event) => {
                const value = event.target.value;
                if (value === null) {
                  setFormError({ ...formError, type: true });
                  return;
                }
                if (formError.type) setFormError({ ...formError, type: false });
                setFormData({ ...formData, type: value });
              }}
            >
              {types.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel color="secondary">Category</InputLabel>
            <Select
              variant="standard"
              autoWidth
              color="secondary"
              value={formData.category}
              error={formError.category}
              onChange={(event) => {
                const value = event.target.value;
                if (value === null) {
                  setFormError({ ...formError, category: true });
                  return;
                } else if (formError.category)
                  setFormError({
                    ...formError,
                    category: false,
                  });
                setFormData({ ...formData, category: value });
              }}
            >
              {formData.type === "Income"
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
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Amount"
            type="number"
            fullWidth
            color="secondary"
            value={formData.amount}
            error={formError.amount}
            inputProps={{ min: 0 }}
            onChange={(event) => {
              let value = event.target.value;
              if (value === null || Number(value) < 0) {
                setFormError({ ...formError, amount: true });
                value = 0;
              } else if (formError.amount)
                setFormError({
                  ...formError,
                  amount: false,
                });
              setFormData({ ...formData, amount: value });
            }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            fullWidth
            color="secondary"
            InputLabelProps={{ shrink: true }}
            inputProps={{ max: new Date() }}
            value={formData.date}
            error={formError.date}
            onChange={(event) => {
              const value = event.target.value;
              if (value === null || value.length === 0 || value === "") {
                setFormError({ ...formError, date: true });
              } else if (formError.date)
                setFormError({
                  ...formError,
                  date: false,
                });
              setFormData({ ...formData, date: value });
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={onCreateTransaction}
          >
            CREATE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
