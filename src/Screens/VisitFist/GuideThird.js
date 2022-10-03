import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
  } from "react-native";
  import { COLOR } from "~/assets/Colors";
  import { FoodIcon } from "~/components/Icons";
  import Button from "~/components/Button";
  import NextCircle from "~/components/NextCircle";
  
  export default function GuideThird({navigation}) {
    return (
      <TouchableWithoutFeedback onPressOut={()=> navigation.navigate("GuideFourth")}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            translucent={true}
            backgroundColor="transparent"
          />
          <View style={{marginBottom:160, alignItems: 'center'}}>
            <FoodIcon width={180} height={180} />
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 24,
                color: COLOR.WHITE,
                marginTop:50
              }}
            >
              Variety of food
            </Text>
            <Text
              style={{
                width: 320,
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.WHITE,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Set your location to start exploring restaurants around you
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 14,
              // justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button onPress={()=> navigation.navigate("Login")}>Login</Button>
  
            <View style={{ marginVertical: 30 }}>
              <NextCircle position="3" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLOR.PRIMARY_COLOR,
      justifyContent: "flex-end",
      alignItems: "center",
    },
  });
  