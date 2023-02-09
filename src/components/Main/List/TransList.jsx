import React from "react";

import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  List,
  IconButton,
  Avatar,
  Slide,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ClearIcon from "@mui/icons-material/Clear";
import { useExpenseTrackerContext } from "../../../context/Context";

const TransList = () => {
  const { transactions, deleteTransaction } = useExpenseTrackerContext();
  const sortedTransactions = transactions.sort(
    (a, b) =>
      new Date(a.date.split("/").reverse().join("-")) - Date.parse(new Date(b.date.split("/").reverse().join("-")))
  );
  return (
    <List
      dense={false}
      style={{ maxHeight: 150, overflow: "auto" }}
      sx={{
        "&::-webkit-scrollbar": {
          width: 5,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "grey",
          borderRadius: 5,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "primary.dark",
          borderRadius: 5,
        },
      }}
    >
      {sortedTransactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem key={transaction.id}>
            <ListItemAvatar>
              <Avatar>
                <PaidIcon
                  color={transaction.type === "Income" ? "success" : "error"}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category.type}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                size="large"
                edge="end"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </List>
  );
};

export default TransList;
