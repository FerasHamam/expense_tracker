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
    <AppBar position="relative" sx={{ bgcolor: "primary.main" , width:"100vw" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0.5 }}
          m={0}
          p={0}
        >
          Expenses Tracker
        </Typography>
        <Box sx={{ flexGrow: 0.6 }}>
          <PushToTalkButton placement="center" size="45px" hint="" intro="" />
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
