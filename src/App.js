import { Grid } from "@mui/material";
import React from "react";
import Details from "./components/Details/Details";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="container"
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expenses" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
