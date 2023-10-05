import { StyleSheet } from "react-native";
import { View, Text, FlatList } from "react-native";

const renderExpenseItem = (itemData) => {
  return <Text>{itemData.item.description}</Text>;
};

export const ExpensesList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({});
