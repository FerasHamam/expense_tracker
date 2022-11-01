import React from "react";
import { useReducer } from "react";
import { ExpenseTrackerContext } from "./Context";

const ExpenseTrackerInitialState =
  JSON.parse(localStorage.getItem("transactions")) || [];

const expenseTrackerReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "ADD":
      transactions = [...state, action.payload];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "DELETE":
      transactions = [...state];
      transactions = transactions.filter((t) => t.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

const ExpenseTrackerProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(
    expenseTrackerReducer,
    ExpenseTrackerInitialState
  );

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD", payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{ addTransaction, deleteTransaction, transactions }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerProvider;
