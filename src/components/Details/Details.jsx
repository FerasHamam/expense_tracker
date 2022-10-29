import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import useTransactions from "../../hooks/useTransactions";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Details = ({ title }) => {
  console.log("oui " + title);
  const borderC = title === "Income" ? "secondary.main" : "error.main";
  const { total, chartData } = useTransactions(title);
  return (
    <div>
      <Card
        sx={{
          borderBottom: 6,
          borderColor: borderC,
          backgroundColor: "primary.main",
        }}
      >
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">Total: ${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
