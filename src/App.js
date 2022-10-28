import { CssBaseline, Grid } from "@mui/material";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import "./App.css";
import Appbar from "./components/AppBar/Appbar";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Grid container height="100vh" sx={{ bgcolor: "background.default" }}>
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
        </Grid>
      </Grid>
    </ThemeContextProvider>
  );
};

export default App;
