import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import useTransactions from "../../hooks/useTransactions";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Details = ({ title }) => {
  const borderC = title === "Income" ? "green" : "error.main";
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
        <CardHeader title={title} titleTypographyProps={{ align: "center" }} />
        <Divider />
        <CardContent>
          <Typography variant="h6" align="center">
            Total {title}: ${total}
          </Typography>
        </CardContent>
        <CardContent>
          {total > 0 && (
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
