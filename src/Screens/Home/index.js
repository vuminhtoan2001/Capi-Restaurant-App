import { View, Text, StyleSheet } from "react-native";
import { MapIcon } from "~/components/Icons";
import LayoutFull from '~/components/LayoutFull';
import { COLOR } from "~/assets/Colors";
import Button from "~/components/Button";
export default function Home({navigation}) {
  return (
    <LayoutFull style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MapIcon width={140} height={140} />
      <Text style={styles.title}>Hi, nice to meet you!</Text>
      <Text
        style={{
          width: 320,
          fontFamily: "quicksan_700",
          fontSize: 16,
          color: COLOR.TEXT_OPACITY_COLOR,
          textAlign: "center",
          marginTop: 16,
        }}
      >
        Set your location to start exploring restaurants around you
      </Text>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 14,
          alignItems: "center",
          marginTop:40,
        }}
      >
        <Button primary onPress={() => navigation.navigate("LocationSearch")}>User current location</Button>
      </View>
    </LayoutFull>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "quicksan_700",
    fontSize: 24,
    color: COLOR.BLACK,
    width: 300,
    textAlign: "center",
    marginTop: 20,
  },
  text: {
    fontFamily: "quicksan_700",
    fontSize: 16,
    color: COLOR.TEXT_OPACITY_COLOR,
  },
});
