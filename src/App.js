import { CssBaseline, Grid } from "@mui/material";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import "./App.css";
import Appbar from "./components/AppBar/Appbar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        height="100vh"
        sx={{ bgcolor: "background.default" }}
        spacing={2}
      >
        <Grid item sm={12}>
          <Appbar />
        </Grid>
        <Grid item sm={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4}>
              <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Main />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Details title="Expenses" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
