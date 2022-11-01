import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import Form from "./Form/Form";
import TransList from "./List/TransList";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/Context";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div>
      <Card sx={{ backgroundColor: "primary.main", margin: "5vh 3vw" }}>
        <CardHeader title="Expenses Tracker" subheader="Powered By Speechly" />
        <Divider />
        <CardContent>
          <Typography align="center" variant="h6">
            Total Balance ${balance}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Form />
        </CardContent>
        <CardContent>
          <TransList />
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
