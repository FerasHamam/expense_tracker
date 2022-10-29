import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
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
  date: null,
  touched: false,
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
    let formNotValid =
      formError.amount ||
      formError.category ||
      formError.date ||
      formError.type ||
      !formData.touched;
    if (formNotValid) {
      setFormData((prevFormData) => ({ ...prevFormData, touched: true }));
      return;
    }
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
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  type: value,
                  touched: true,
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
              disabled={formData.type === ""}
              onChange={(event) => {
                const value = event.target.value;
                if (value === null) {
                  setFormError({ ...formError, category: true, touched: true });
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
            helperText={
              formError.amount === true ? "Please enter positive Amount " : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            onChange={(event) => {
              let value = event.target.value;
              if (value === null || Number(value) <= 0) {
                setFormError({ ...formError, amount: true, touched: true });
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
            value={formData.date !== null ? formData.date : new Date()}
            error={formError.date}
            helperText={
              formError.date === true ? "Please enter a valid date" : ""
            }
            onChange={(event) => {
              const value = event.target.value;
              if (value === null || value.length === 0 || value === "") {
                setFormError({ ...formError, date: true });
              } else if (formError.date)
                setFormError({
                  ...formError,
                  date: false,
                });
              setFormData({ ...formData, date: value, touched: true });
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={onCreateTransaction}
            disabled={
              !formData.touched ||
              formData.amount.length < 1 ||
              formData.category.length < 1 ||
              formData.date === null ||
              formData.type.length < 1
            }
          >
            CREATE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
