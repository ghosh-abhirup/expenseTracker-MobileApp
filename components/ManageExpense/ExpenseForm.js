import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({ onCancel, onSubmit, submitBtnLabel, defaultVal }) => {
  const [inpVal, setInpVal] = useState({
    amount: defaultVal ? defaultVal.amount.toString() : "",
    description: defaultVal ? defaultVal.description : "",
    date: defaultVal ? getFormattedDate(defaultVal.date) : "",
  });

  const inputChangeHandler = (identifier, enteredVal) => {
    setInpVal((currVal) => {
      return { ...currVal, [identifier]: enteredVal };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inpVal.amount,
      date: new Date(inpVal.date),
      description: inpVal.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descIsValid) {
      Alert.alert("Invalid Input", "Please check your values");
      return;
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inpRow}>
        <Input
          label="Amount"
          textInp={{
            keyboardType: "decimal-pad",
            value: inpVal.amount,
            onChangeText: inputChangeHandler.bind(this, "amount"),
          }}
          style={{ flex: 1 }}
        />
        <Input
          label="Date"
          textInp={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inpVal.date,
            onChangeText: inputChangeHandler.bind(this, "date"),
          }}
          style={{ flex: 1 }}
        />
      </View>
      <Input
        label="Description"
        textInp={{
          value: inpVal.description,
          onChangeText: inputChangeHandler.bind(this, "description"),
          multiLine: true,
          autoCapitalise: "none",
        }}
      />

      <View style={styles.btnContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitBtnLabel ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inpRow: {
    flexDirection: "row",
    gap: 6,
  },
  formContainer: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
