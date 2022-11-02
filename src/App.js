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
      <Grid
        container
        height="105vh"
        sx={{ bgcolor: "background.default" }}
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        m={0}
      >
        <Grid item xs={13}>
          <Appbar />
        </Grid>
        <Grid
          item
          xs={11}
          md={4}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: { margin: "15vh 0 2vh 0" },
            [theme.breakpoints.up("sm")]: { margin: "10vh 0 2vh 0" },
          })}
        >
          <SpeechlyGuide />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            mb={10}
          >
            <Grid
              item
              xs={2.5}
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
              xs={10}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: { display: "none" },
              })}
            >
              <Details title="Income" />
            </Grid>
            <Grid
              item
              xs={10}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: { display: "none" },
              })}
            >
              <Details title="Expense" />
            </Grid>
            <Grid
              item
              xs={2.5}
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
