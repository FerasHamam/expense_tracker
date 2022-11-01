import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/Context";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "../constants/constants";

const useTransactions = (type) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === type);
  const categories = type === "Income" ? incomeCategories : expenseCategories;
  const total = transactionsPerType.reduce((acc, t) => (acc += Number(t.amount)), 0);
  transactionsPerType.forEach((t) => {
    const categoryIndex = categories.findIndex(
      (c) => c.type === t.category.type
    );
    if (categoryIndex >= 0) categories[categoryIndex].amount = t.amount;
  });
  const filteredCategories = categories.filter((c) => Number(c.amount) > 0);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  return { total, chartData };
};

export default useTransactions;
