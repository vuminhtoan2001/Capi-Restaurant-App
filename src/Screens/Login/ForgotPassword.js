import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { COLOR } from "~/assets/Colors";
import Button from "~/components/Button";
export default function ForgotPassword({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"
            translucent={true}
            backgroundColor="transparent"
          />

          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Retrive Your Password
          </Text>
          <View style={{ width: "100%", paddingHorizontal: 15 }}>
            <TextInput
              style={[styles.input]}
              selectionColor="black"
              placeholder="Email"
              placeholderTextColor={COLOR.TEXT_OPACITY_COLOR}
            />
            <View style={{ marginTop: 40 }}>
              <Button primary onPress={()=>navigation.navigate("Verify")}>Submit</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 20,
  },
  title: {
    fontFamily: "quicksan_700",
    fontSize: 24,
    color: COLOR.BLACK,
    width: 260,
    textAlign: "center",
  },
  text: {
    fontFamily: "quicksan_700",
    fontSize: 16,
    color: COLOR.TEXT_OPACITY_COLOR,
  },
  input: {
    width: "100%",
    paddingHorizontal: 2,
    paddingTop: 43,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: COLOR.BORDER_COLOR,
    fontFamily: "quicksan_700",
  },
});
