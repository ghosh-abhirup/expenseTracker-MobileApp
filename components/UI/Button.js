import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, mode, onPress, style }) => {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.btnStyle, mode === "flat" && styles.flat]}>
          <Text style={[styles.btnText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },

  flat: {
    backgroundColor: "transparent",
  },

  btnText: {
    color: "white",
    textAlign: "center",
  },

  flatText: {
    color: GlobalStyles.colors.primary200,
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
