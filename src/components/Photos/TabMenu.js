import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { COLOR } from "~/assets/Colors";

export default function TabMenu({tabMenu}) {
  const navigation = useNavigation();
  const [active, setActive] = useState(1);

  const handleClick = (item) => {
    setActive(item.id);
    if (item.name === "All photos") {
      navigation.navigate("AllList");
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      {tabMenu?.map((item) => (
        <TouchableOpacity onPress={()=>handleClick(item)} key={item.id}>
          <Text
            style={[
              {
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.BLACK,
              },
              active === item.id && { color: COLOR.PRIMARY_COLOR },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              {
                fontFamily: "quicksan_700",
                fontSize: 12,
                color: COLOR.TEXT_OPACITY_COLOR,
              },
              active === item.id && { color: COLOR.PRIMARY_COLOR },
            ]}
          >
            ({item.qty})
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
