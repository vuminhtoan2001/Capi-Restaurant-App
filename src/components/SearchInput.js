import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import {COLOR} from '~/assets/Colors'

export default function SearchInput() {
  return (
    <View style={{ paddingHorizontal:15, marginTop:20}}>
      <View style={styles.icon}>
        <Feather name="search" size={24} color={COLOR.TEXT_OPACITY_COLOR} />
      </View>
      <TextInput
        style={styles.input}
        selectionColor={COLOR.TEXT_OPACITY_COLOR}
        placeholder="Search for restaurants..."
        placeholderTextColor="#D9D9D9"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
    fontFamily: "quicksan_700",
    fontSize:16,
    paddingVertical:8,
    paddingLeft:40,
    paddingRight:60,
    borderRadius:10,
  },
  icon:{
    position:'absolute',
    height:"100%",
    zIndex:1,
    left:20,
    justifyContent:'center'
  }
});
