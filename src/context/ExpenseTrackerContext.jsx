import React from "react";
import { useReducer } from "react";
import { ExpenseTrackerContext } from "./Context";

const expenseTrackerReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "ADD":
      transactions = [...state, action.payload];
      return transactions;
    case "DELETE":
      transactions = [...state];
      transactions = transactions.filter((t) => t.id !== action.payload);
      return transactions;
    default:
      return state;
  }
};
const ExpenseTrackerInitialState = [];

const ExpenseTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
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
      value={{ addTransaction, deleteTransaction, transactions: state }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerProvider;
