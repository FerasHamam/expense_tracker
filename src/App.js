import { CssBaseline, Grid } from "@mui/material";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import "./App.css";
import Appbar from "./components/AppBar/Appbar";
import SpeechlyGuide from "./components/SpeechlyGuide/SpeechlyGuide";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Appbar />

      <Grid
        container
        height="100vh"
        sx={{ bgcolor: "background.default" }}
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={11} md={5} mt={5} alignSelf="start">
          <SpeechlyGuide />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            mb={20}
            alignSelf="start"
          >
            <Grid
              item
              xs={11}
              md={2.5}
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: { display: "none" },
              })}
            >
              <Details title="Income" />
            </Grid>
            <Grid item xs={11} md={4}>
              <Main />
            </Grid>
            <Grid
              item
              xs={11}
              md={2.5}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: { display: "none" },
              })}
            >
              <Details title="Income" />
            </Grid>
            <Grid
              item
              xs={11}
              md={2.5}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: { display: "none" },
              })}
            >
              <Details title="Expense" />
            </Grid>
            <Grid
              item
              xs={11}
              md={2.5}
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: { display: "none" },
              })}
            >
              <Details title="Expense" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
