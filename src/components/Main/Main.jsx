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

const Main = () => {
  return (
    <div>
      <Card sx={{ backgroundColor: "primary.main" ,margin:'0px 3vw'}}>
        <CardHeader title="Expenses Tracker" subheader="Powered By Speechly" />
        <CardContent>
          <Typography align="center" variant="h6">
            Total Balance $100
          </Typography>
          <Typography align="center" variant="subtitle2">
            Try Saying Add income for $100 in Category Salary for Monday
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
