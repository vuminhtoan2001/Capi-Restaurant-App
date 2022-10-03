import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReviewItem from "./ReviewItem";
import { COLOR } from "~/assets/Colors";

export default function ReviewList() {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 18,
        }}
      >
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 16,
            color: COLOR.BLACK,
          }}
        >
          Reviews
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ReviewList")}>
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 16,
              color: COLOR.PRIMARY_COLOR,
            }}
          >
            Read all
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </View>
    </View>
  );
}
