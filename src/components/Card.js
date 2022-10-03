import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { COLOR } from "~/assets/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Card() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{ width: 150, marginLeft: 15 }} onPress={()=>navigation.navigate('Restaurant')}>
      <Image
        style={{
          width: "100%",
          height: 100,
          resizeMode: "contain",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        source={{
          uri: "https://product.hstatic.net/1000389344/product/pizza_pepperoni-texgrill-haiphong_dbdf3c75f0a84d1bab2f7be8793dbd9c_master.jpg",
        }}
      />
      <View
        style={{
          paddingHorizontal: 9,
          paddingVertical: 15,
          backgroundColor: "white",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 14,
            color: COLOR.BLACK,
          }}
        >
          Lombar Pizza
        </Text>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          East 46th Street
        </Text>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          Pizza, Italian
        </Text>
      </View>
    </TouchableOpacity>
  );
}
