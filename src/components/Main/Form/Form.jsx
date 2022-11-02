import { colors, Grid, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  expenseCategories,
  incomeCategories,
} from "../../../constants/constants";
import { useExpenseTrackerContext } from "../../../context/Context";
import formatDate from "../../../utils/formatDate";
import { useSpeechContext } from "@speechly/react-client";
import CreateButton from "./CreateButton";
import DatePicker from "./DatePicker";
import AmountField from "./AmountField";
import TypeSelect from "./TypeSelect";
import CategorySelect from "./CategorySelect";

const initialFormData = {
  type: "",
  category: "",
  amount: "",
  date: null,
  touched: false,
};
const initialFormError = {
  type: false,
  category: false,
  amount: false,
  date: false,
};
const Form = () => {
  const { segment } = useSpeechContext();
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const { addTransaction } = useExpenseTrackerContext();
  const createTransaction = () => {
    let formNotValid =
      formError.amount ||
      formError.date ||
      formError.type ||
      formError.category ||
      !formData.touched;
    if (formNotValid) {
      setFormData((prevFormData) => ({ ...prevFormData, touched: true }));
      return;
    }
    addTransaction({
      ...formData,
      amount: Number(formData.amount).toFixed(2),
      id: uuidv4(),
      date: formatDate(formData.date),
    });

    setFormData(() => initialFormData);
    setFormError(() => initialFormError);
  };

  const speechlyInputForm = (segment) => {
    if (segment.intent.intent === "add_expense")
      setFormData((prevFormData) => ({ ...prevFormData, type: "Expense" }));
    else if (segment.intent.intent === "add_income")
      setFormData((prevFormData) => ({
        ...prevFormData,
        type: "Income",
      }));
    else if (segment.intent.intent === "create_transaction")
      createTransaction();
    else if (segment.intent.intent === "cancel_transaction")
      setFormData(initialFormData);
    segment.entities.forEach((e) => {
      switch (e.type) {
        case "amount":
          const amount = e.value;
          if (
            Number.isNaN(Number(amount)) ||
            amount === "" ||
            amount === null ||
            Number(amount) <= 0
          ) {
            setFormError((prevFormError) => ({
              ...prevFormError,
              amount: true,
            }));
            setFormData((prevFormData) => ({
              ...prevFormData,
              amount: initialFormData.amount,
            }));
          } else {
            setFormError((prevFormError) => ({
              ...prevFormError,
              amount: false,
            }));
            setFormData((prevFormData) => ({
              ...prevFormData,
              amount: Number(amount),
            }));
          }

          break;
        case "category":
          const category = `${e.value.charAt(0)}${e.value
            .slice(1)
            .toLowerCase()}`;
          if (incomeCategories.map((iC) => iC.type).includes(category)) {
            setFormData((prevFormData) => ({
              ...prevFormData,
              type: "Income",
              category: incomeCategories.find((iC) => iC.type === category),
              touched: true,
            }));
            setFormError((prevFormError) => ({
              ...prevFormError,
              type: false,
              category: false,
            }));
          } else if (
            expenseCategories.map((eC) => eC.type).includes(category)
          ) {
            setFormData((prevFormData) => ({
              ...prevFormData,
              type: "Expense",
              category: expenseCategories.find((iC) => iC.type === category),
              touched: true,
            }));
            setFormError((prevFormError) => ({
              ...prevFormError,
              type: false,
              category: false,
            }));
          }
          break;
        case "date":
          const date = e.value;
          if (
            isNaN(Date.parse(date)) ||
            date === null ||
            date.length === 0 ||
            date === ""
          ) {
            setFormError((prevFormError) => ({
              ...prevFormError,
              date: true,
            }));
            setFormData((prevFormData) => ({
              ...prevFormData,
              date: initialFormData.date,
            }));
          } else {
            setFormError((prevFormError) => ({
              ...prevFormError,
              date: false,
            }));
            setFormData((prevFormData) => ({
              ...prevFormData,
              date: date,
            }));
          }
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    if (segment && segment.isFinal) {
      speechlyInputForm(segment);
    } // eslint-disable-next-line
  }, [segment]);

  return (
    <div>
      <Grid container direction="row" align="center" spacing={4}>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="subtitle2"
            color={colors.grey[600]}
          >
            {segment && `${segment.words.map((w) => w.value).join(" ")}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TypeSelect
            type={formData.type}
            typeError={formError.type}
            setFormData={setFormData}
            setFormError={setFormError}
          />
        </Grid>
        <Grid item xs={6}>
          <CategorySelect
            category={formData.category}
            categoryError={formError.category}
            type={formData.type}
            setFormData={setFormData}
            setFormError={setFormError}
          />
        </Grid>
        <Grid item xs={6}>
          <AmountField
            amount={formData.amount}
            amountError={formError.amount}
            setFormData={setFormData}
            setFormError={setFormError}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            date={formData.date}
            dateError={formError.date}
            setFormData={setFormData}
            setFormError={setFormError}
          />
        </Grid>
        <Grid item xs={12}>
          <CreateButton
            onCreateTransaction={createTransaction}
            formData={formData}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
