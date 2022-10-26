import { Grid } from "@mui/material";
import React from "react";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import "./App.css";

const App = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={20}
      >
        <Grid item xs={12} sm={3.5}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <Details title="Expenses" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
