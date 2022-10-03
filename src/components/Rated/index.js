import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import {COLOR} from "~/assets/Colors"

export default function Rated({rated}) {
    const starts= new Array(rated).fill(0);
  return (
    <View style={{flexDirection: "row",alignItems: "center"}}>
      <Text style={{fontFamily: "quicksan_700", fontSize:12, color:COLOR.TEXT_OPACITY_COLOR}}>Rated</Text>
      <View style={{flexDirection: "row",alignItems: "center"}}>
        {starts.map((item,index)=>(
            <Feather key={index} name="star" size={20} color={COLOR.YELLOW} style={{marginLeft:8}}/>
        ))}
      </View>
      <Text style={{fontFamily: "quicksan_700",fontSize:12,color:COLOR.YELLOW, marginLeft:8}}>{rated}.0</Text>
    </View>
  );    
}
