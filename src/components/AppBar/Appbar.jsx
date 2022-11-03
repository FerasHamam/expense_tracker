import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import React from "react";
import { Box } from "@mui/system";
import { useTheme } from "../../context/Context";
import { PushToTalkButton } from "@speechly/react-ui";

const Appbar = () => {
  const { mode, changeTheme } = useTheme();
  return (
    <AppBar position="relative" sx={{ bgcolor: "primary.main" }} m={0} p={0} elevation={6}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, width: "20vw" }}
          p={1}
        >
          Smart Tracker
        </Typography>
        <Box sx={{ flexGrow: 1, width: "17vw" }}>
          <PushToTalkButton placement="center" size="40px" hint="" intro="" />
        </Box>
        <IconButton onClick={changeTheme}>
          {mode === "light" ? (
            <DarkModeTwoToneIcon />
          ) : (
            <LightModeTwoToneIcon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
