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
import { PushToTalkButton } from "@speechly/react-ui";
import { Box } from "@mui/system";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div>
      <Card sx={{ backgroundColor: "primary.main", margin: "0 3vw" }}>
        <CardHeader
          title="Expenses Tracker"
          subheader="Powered By Speechly"
          action={
            <Box
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: { display: "none" },
              })}
              mt={1}
            >
              <PushToTalkButton
                placement="center"
                size="48px"
                hint=""
                intro=""
              />
            </Box>
          }
        />
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
