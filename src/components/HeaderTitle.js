import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import {COLOR} from "~/assets/Colors"

export default function HeaderTitle({title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.goBack()}
      style={{
        width: "100%",
        paddingLeft: 15,
        flexDirection: "row",
        alignItems: "center",
        marginTop:10,
      }}
    >
      <Feather name="arrow-left" size={30} color={COLOR.PRIMARY_COLOR} />
      <Text style={{fontFamily: "quicksan_700",fontSize:16, color:COLOR.BLACK, marginLeft:10}}>{title}</Text>
    </TouchableOpacity>
  );
}
