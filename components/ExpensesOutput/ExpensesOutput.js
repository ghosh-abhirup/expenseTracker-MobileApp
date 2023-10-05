import { Text, FlatList, View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of tuxedos",
    amount: 189.99,
    date: new Date("2022-01-20"),
  },
  {
    id: "e3",
    description: "Books",
    amount: 30,
    date: new Date("2023-07-05"),
  },
];

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.containerStyle}>
      <ExpensesSummary period={expensePeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList data={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
