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

const Form = () => {
  return (
    <div>
      <Grid container direction="row" align="center" spacing={2}>
        <Grid item xs={12}>
          ...
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel color="secondary">Type</InputLabel>
            <Select variant="standard" autoWidth color="secondary">
              <MenuItem>Business</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel color="secondary">Category</InputLabel>
            <Select variant="standard" autoWidth color="secondary"></Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Amount"
            type="number"
            fullWidth
            color="secondary"
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            fullWidth
            color="secondary"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="secondary">
            CREATE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
