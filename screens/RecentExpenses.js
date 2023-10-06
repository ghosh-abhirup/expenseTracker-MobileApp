import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const { expenses } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod={"Last 7 days"}
      fallbackText="No expenses registered in last 7 days"
    />
  );
};

export default RecentExpenses;
