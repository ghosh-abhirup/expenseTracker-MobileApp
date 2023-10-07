import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, style, textInp }) => {
  return (
    <View style={[styles.inpContainer, style]}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        {...textInp}
        style={[
          styles.inp,
          textInp && textInp.multiLine ? styles.inpMultiLine : "",
        ]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inpContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  labelStyle: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  inp: {
    backgroundColor: GlobalStyles.colors.primary100,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
  inpMultiLine: {
    textAlignVertical: "top",
    minHeight: 100,
  },
});
