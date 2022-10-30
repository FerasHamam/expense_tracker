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
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

const Main = () => {
  return (
    <div>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
      <Card sx={{ backgroundColor: "primary.main", margin: "0px 3vw" }}>
        <CardHeader title="Expenses Tracker" subheader="Powered By Speechly" />
        <Divider />
        <CardContent>
          <Typography align="center" variant="h6">
            Total Balance $100
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
      <PushToTalkButtonContainer>
        <PushToTalkButton/>
      </PushToTalkButtonContainer>
    </div>
  );
};

export default Main;
