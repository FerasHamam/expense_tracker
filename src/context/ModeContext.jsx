import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { useState, useMemo } from "react";
import { ThemeContext } from "./Context";

const initialMode = JSON.parse(localStorage.getItem("mode")) || "light";

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(initialMode);
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            type: "light",
            primary: {
              main: "#9C9EFE",
            },
            secondary: {
              main: "#5f31c4",
            },
            background: {
              default: "#FFFDFA",
              paper: "#FFFDFA",
            },
          }
        : {
            type: "dark",
            primary: {
              main: "#301E67",
            },
            secondary: {
              main: "#b99ff7",
            },
            background: {
              default: "#03001C",
              paper: "#03001C",
            },
          }),
    },
  });
  const onChangeModeHandler = () => {
    setMode((prevMode) => {
      let newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("mode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeContext.Provider
      value={{
        mode: mode,
        changeTheme: onChangeModeHandler,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
