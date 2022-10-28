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
  type: types[0],
  category: "",
  amount: 0,
  date: new Date(),
};
const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { addTransaction } = useExpenseTrackerContext();
  console.log(formData);
  const onCreateTransaction = () => {
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
      date: formatDate(formData.date),
    });
    setFormData({ ...initialFormData });
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
              onChange={(event) =>
                setFormData({ ...formData, type: event.target.value })
              }
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
              onChange={(event) => {
                setFormData({ ...formData, category: event.target.value });
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
            inputProps={{ min: 0 }}
            onChange={(event) =>
              setFormData({ ...formData, amount: event.target.value })
            }
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
            onChange={(event) =>
              setFormData({ ...formData, date: event.target.value })
            }
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
