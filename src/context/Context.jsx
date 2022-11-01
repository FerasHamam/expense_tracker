import React, { createContext, useContext } from "react";
import ExpenseTrackerProvider from "./ExpenseTrackerContext";
import ThemeContextProvider from "./ModeContext";




export const ExpenseTrackerContext = createContext();

export const useExpenseTrackerContext = () => {
  return useContext(ExpenseTrackerContext);
};

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const Provider = ({ children }) => {
  return (
    <ExpenseTrackerProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ExpenseTrackerProvider>
  );
};

export default Provider;
