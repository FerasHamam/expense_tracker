import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import "./Details.css";

const Details = ({ title }) => {
  const cardClassName = title === "Income" ? "income" : "expenses";
  return (
    <div>
      <Card className={cardClassName}>
        <CardHeader title={title} />
        <CardContent>
          <Typography align="center" variant="h2"></Typography>
          <Typography variant="h5">100$</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Details.propTypes = {};

export default Details;
