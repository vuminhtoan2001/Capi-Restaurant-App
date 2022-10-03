import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "~/assets/Colors";

export default function NextCircle({ position }) {
  return (
    <View
      style={{
        width: 96,
        height: 12,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={[styles.itemStyle, position == 1 && styles.active]}></View>
      <View style={[styles.itemStyle, position == 2 && styles.active]}></View>
      <View style={[styles.itemStyle, position == 3 && styles.active]}></View>
      <View style={[styles.itemStyle, position == 4 && styles.active]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: 12,
    height: 12,
    backgroundColor: COLOR.WHITE,
    borderRadius: 50,
    opacity: 0.7,
  },
  active: {
    opacity: 1,
  },
});
