import { CssBaseline, Grid } from "@mui/material";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import "./App.css";
import Appbar from "./components/AppBar/Appbar";
import SpeechlyGuide from "./components/SpeechlyGuide/SpeechlyGuide";
import { Box } from "@mui/system";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Appbar />

      <Grid
        container
        height="100vh"
        sx={{ bgcolor: "background.default" }}
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={10} md={4} mt={2} mb={2}>
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
          >
            <Grid
              item
              xs={10}
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
              xs={10}
              md={2.5}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: { display: "none" },
              })}
            >
              <Details title="Income" />
            </Grid>
            <Grid
              item
              xs={10}
              md={2.5}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: { display: "none" },
              })}
            >
              <Details title="Expense" />
            </Grid>
            <Grid
              item
              xs={10}
              md={2.5}
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: { display: "none" },
              })}
            >
              <Details title="Expense" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box xs={{ height: "30vh" }}></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
