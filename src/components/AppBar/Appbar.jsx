import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import React from "react";
import { Box } from "@mui/system";
import { useTheme } from "../../context/Context";

const Appbar = () => {
  const { mode, changeTheme } = useTheme();
  console.log(changeTheme);
  return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
      <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Expenses Tracker
          </Typography>
          <IconButton onClick={changeTheme}>
            {mode === "light" ? (
              <DarkModeTwoToneIcon />
            ) : (
              <LightModeTwoToneIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
