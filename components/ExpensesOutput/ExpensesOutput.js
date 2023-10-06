import { Text, FlatList, View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensePeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList data={expenses} />;
  }

  return (
    <View style={styles.containerStyle}>
      <ExpensesSummary period={expensePeriod} expenses={expenses} />
      {content}
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
  infoText: {
    fontSize: 16,
    color: "white",
    marginTop: 32,
    textAlign: "center",
  },
});
