import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { useState, useMemo } from "react";
import { ThemeContext } from "./Context";

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");
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
              main: "#2d7000",
            },
            background: {
              default: "#b7afc5",
              paper: "#b7afc5",
            },
          }
        : {
            type: "dark",
            primary: {
              main: "#493469",
            },
            secondary: {
              main: "#3ea320",
            },
            background: {
              default: "#333038",
              paper: "#333038",
            },
          }),
    },
  });
  const onChangeModeHandler = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeContext.Provider
      value={{ mode: mode, changeTheme: onChangeModeHandler }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
