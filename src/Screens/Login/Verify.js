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
import { useState } from "react";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

import { COLOR } from "~/assets/Colors";
import Button from "~/components/Button";

export default function Verify({ navigation }) {
  const [code, setCode] = useState();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"
            translucent={true}
            backgroundColor="transparent"
          />

          <Text style={styles.title}>Verify your Mobile</Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Enter your OTP code here
          </Text>
          <View style={{ width: "100%", paddingHorizontal: 15 }}>
            <View  style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:30,
                }}>
              <SmoothPinCodeInput
                placeholder={
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 25,
                      opacity: 0.3,
                      backgroundColor: COLOR.BLACK,
                    }}
                  ></View>
                }
                mask={
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 25,
                      backgroundColor: COLOR.BLACK,
                    }}
                  ></View>
                }
                maskDelay={1000}
                password={true}
                cellStyle={null}
                cellStyleFocused={true}
                autoFocus={true}
                value={code}
                onTextChange={(code) => setCode(code)}
                textStyle={{color:"black",fontSize:24,fontFamily:"quicksan_700"}}
              />
            </View>
            <View style={{ marginTop: 40 }}>
              <Button primary onPress={() => navigation.navigate("Login")}>
                Verify Now
              </Button>
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
