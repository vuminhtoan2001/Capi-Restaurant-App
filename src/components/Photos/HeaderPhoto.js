import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLOR } from "~/assets/Colors";
import { GroupIcon } from "~/components/Icons";

export default function HeaderPhoto({
  title,
  textDetail,
  onlyTitle,
  groupIcon,
  Album
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        borderBottomWidth: 1,
        borderColor: COLOR.BORDER_COLOR,
        paddingVertical: 10,
        paddingBottom: 16,
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="arrow-left" size={30} color={COLOR.PRIMARY_COLOR} />
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 20,
              color: COLOR.BLACK,
              marginLeft: 10,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
        {onlyTitle ? (
          false
        ) : Album ?(<Text style={{fontFamily: "quicksan_700", fontSize: 20, color: COLOR.PRIMARY_COLOR}}>Album</Text>): groupIcon ? (
          <TouchableOpacity style={{ flexDirection: "row", paddingTop: 10 }}>
            <GroupIcon width={28  } height={28  }/>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ flexDirection: "row", paddingTop: 10 }}>
            <MaterialCommunityIcons
              name="format-list-checkbox"
              size={34}
              color={COLOR.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        )}
      </View>
      {onlyTitle ? (
        false
      ) : (
        <Text
          style={{
            marginLeft: 50,
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          {textDetail}
        </Text>
      )}
    </View>
  );
}
