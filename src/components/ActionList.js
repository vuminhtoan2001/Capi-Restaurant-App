import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { COLOR } from "~/assets/Colors";

export default function ActionList() {
  return (
    <View
      style={{
        paddingHorizontal: 34,
        paddingVertical: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth:1,
        borderColor:COLOR.BORDER_COLOR,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesome name="share-square-o" size={34} color="black" />
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.BLACK,
          }}
        >
          Share
        </Text>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          603
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesome5 name="star" size={32} color="black" />
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.BLACK,
          }}
        >
          Review
        </Text>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          953
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="camera-outline" size={34} color="black" />
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.BLACK,
          }}
        >
          Photo
        </Text>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          115
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Octicons name="bookmark" size={34} color="black" />
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.BLACK,
          }}
        >
          Bookmark
        </Text>
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          1478
        </Text>
      </View>
    </View>
  );
}
