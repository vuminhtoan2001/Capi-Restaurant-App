import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { COLOR } from "~/assets/Colors";

export default function CardCollection() {
  return (
    <TouchableOpacity style={{ width: 150, marginLeft: 15 }}>
      <Image
        style={{
          width: "100%",
          height: 220,
          resizeMode: "cover",
          borderRadius:10,
        }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Pizza_with_mushrooms_and_cheese.jpg/800px-Pizza_with_mushrooms_and_cheese.jpg",
        }}
      />
      <View
        style={{
            position: "absolute",
            bottom:30,
            left:10,
        }}
      >
        <View style={{width:56, height:2, backgroundColor:COLOR.PRIMARY_COLOR}}></View>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 14,
            color: COLOR.WHITE,
          }}
        >
          Lengendary food
        </Text>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.WHITE,
          }}
        >
          34 places
        </Text>
      </View>
    </TouchableOpacity>
  );
}
