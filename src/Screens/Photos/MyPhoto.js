import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';  

import {COLOR} from "~/assets/Colors"
import Layout from "~/components/Layout";
import HeaderPhoto from "~/components/Photos/HeaderPhoto";

export default function MyPhoto() {
  const navigation = useNavigation();
  const [chose, setChose] = useState([5,6,7])
  const handleChose =(item)=>{
    const find = chose.item.find(item=> item===item)
    if(find){
        setChose(chose.filter(item=> item !==item))
    }else{
        setChose([...chose,item])
    }
  }

  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  const renderItem = ({ item, index }) => (
    <View
      style={{
        width: 130,
        height: 130,
        // backgroundColor: "#173143",
        // borderRadius: 4,
        // margin: 10,
        // borderWidth: 1,
        //   borderColor: "red",
      }}
    >
      {index === 0 ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("Camera")}
          style={{
            margin: 2,
            backgroundColor: "#173143",
            borderRadius: 4,
            flex: 1,
          }}
        >
            <View style={{flex:1, backgroundColor:COLOR.PRIMARY_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius:4}}>
            <Ionicons name="camera-outline" size={34} color={COLOR.WHITE} />
            <Text style={{fontFamily: "quicksan_700",fontSize:12, color:COLOR.WHITE}}>User Camera</Text>
            </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => handleChose(item)}
          style={{
            margin: 2,
            backgroundColor: "#173143",
            borderRadius: 4,
            flex: 1,
          }}
        ></TouchableOpacity>
      )}
    </View>
  );

  return (
    <Layout>
      <HeaderPhoto title="All Photo" Album />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingTop: 20,
        }}
      >
        <FlatList
          renderItem={renderItem}
          data={data}
          numColumns={3}
          keyExtractor={(item) => item}
          style={{ flex: 1 }}
        />
      </View>
    </Layout>
  );
}
