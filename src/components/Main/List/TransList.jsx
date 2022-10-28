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
  return (
    <List dense={false} style={{ maxHeight: 150, overflow: "auto" }}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transactions.id}
        >
          <ListItem key={transaction.id}>
            <ListItemAvatar>
              <Avatar>
                <PaidIcon
                  color={transaction.type === "Income" ? "secondary" : "error"}
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
