import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLOR } from "~/assets/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function HeaderTitleDetail({ title, textDetail }) {
    const navigation = useNavigation()
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="arrow-left" size={30} color={COLOR.PRIMARY_COLOR} />
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 16,
              color: COLOR.TEXT_OPACITY_COLOR,
              marginLeft: 10,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <SimpleLineIcons name="bell" size={24} color="black" style={{marginRight:20}}/>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={28}
            color={COLOR.PRIMARY_COLOR}
          />
        </View>
      </View>
      <Text
        style={{
          marginLeft: 57,
          fontFamily: "quicksan_700",
          fontSize: 20,
          color: COLOR.BLACK,
        }}
      >
        {textDetail}
      </Text>
    </View>
  );
}
