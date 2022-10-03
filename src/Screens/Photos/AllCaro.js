import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLOR } from "~/assets/Colors";
import Layout from "~/components/Layout";
import HeaderPhoto from "~/components/Photos/HeaderPhoto";
import TabMenu from "~/components/Photos/TabMenu";

export default function AllCaro() {
  const navigation = useNavigation();
  const tabMenu = [
    {
      id: 1,
      name: "Food",
      qty: 80,
    },
    {
      id: 2,
      name: "Ambience",
      qty: 25,
    },
    {
      id: 3,
      name: "Menu",
      qty: 10,
    },
    {
      id: 4,
      name: "All photos",
      qty: 115,
    },
  ];
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  const renderItem = ({ item }) => (
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
      <TouchableOpacity
        onPress={() => navigation.navigate("AllCaroClick")}
        style={{
          margin: 2,
          backgroundColor: "#173143",
          borderRadius: 4,
          flex: 1,
        }}
      ></TouchableOpacity>
    </View>
  );
  return (
    <Layout>
      <HeaderPhoto title="All photos" textDetail="Lombar Pizza" />
      <TabMenu tabMenu={tabMenu}/>
      <View
        style={{
          width: "100%",
          height: 4,
          backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
        }}
      ></View>
      {/* List photos */}
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
