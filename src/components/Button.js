import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLOR } from "~/assets/Colors";
export default function Button({ children, onPress, primary }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={primary ? styles.primary_text : styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
  text: {
    fontFamily: "quicksan_700",
    backgroundColor: COLOR.WHITE,
    color: COLOR.PRIMARY_COLOR,
    fontSize: 16,
    paddingVertical: 18,
    textAlign: "center",
    borderRadius: 4,
  },
  primary_text: {
    backgroundColor: COLOR.PRIMARY_COLOR,
    color: COLOR.WHITE,
    fontSize: 16,
    paddingVertical: 18,
    textAlign: "center",
    fontFamily: "quicksan_700",
    borderRadius: 4,
  },
});
