import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import "./Details.css";

const Details = ({ title }) => {
  const borderC = title === "Income" ? "secondary.main" : "error.main";
  return (
    <div>
      <Card
        sx={{
          borderBottom: 5,
          borderColor: borderC,
          backgroundColor: "primary.main",
        }}
      >
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
