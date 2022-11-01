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

  const balance = Number(
    transactions.reduce(
      (acc, t) =>
        t.type === "Income"
          ? (acc += Number(t.amount))
          : (acc -= Number(t.amount)),
      0
    )
  ).toFixed(2);

  return (
    <ExpenseTrackerContext.Provider
      value={{ addTransaction, deleteTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerProvider;
