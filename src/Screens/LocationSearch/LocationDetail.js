import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Layout from "~/components/Layout";
import HeaderTitle from "~/components/HeaderTitle";
import { COLOR } from "~/assets/Colors";
import {
  UsIcon,
  AuIcon,
  KroIcon,
  JaIcon,
  FranIcon,
  CaIcon,
  BraIcon,
} from "~/components/Icons";

export default function LocationDetail({ navigation }) {
  const obj = {
    us: <UsIcon width={28} height={28} />,
    au: <AuIcon width={28} height={28} />,
    fran: <FranIcon width={28} height={28} />,
    kro: <KroIcon width={28} height={28} />,
    bra: <BraIcon width={28} height={28} />,
    ca: <CaIcon width={28} height={28} />,
    ja: <JaIcon width={28} height={28} />,
  };

  const Contries = [
    {
      code: "us",
      name: "United States",
    },
    {
      code: "au",
      name: "Australia",
    },
    {
      code: "fran",
      name: "France",
    },
    {
      code: "kro",
      name: "Korean",
    },
    {
      code: "bra",
      name: "Brazil",
    },
    {
      code: "ca",
      name: "Canada",
    },
    {
      code: "ja",
      name: "Japan",
    },
  ];

  new Array(4).fill(0).map((item) => <View>{obj[item.code]}</View>);
  return (
    <Layout>
      <HeaderTitle title="Your location"  />
      <View style={{ width: "100%", paddingHorizontal: 15 }}>
        <TextInput
          style={{
            width: "100%",
            paddingHorizontal: 2,
            paddingTop: 43,
            paddingBottom: 8,
            borderBottomWidth: 1,
            borderColor: COLOR.BORDER_COLOR,
            fontFamily: "quicksan_700",
            fontSize: 20,
          }}
          selectionColor="black"
          placeholder="Search the city..."
          placeholderTextColor={COLOR.TEXT_OPACITY_COLOR}
        />
      </View>
      <View style={styles.list_search}>
        <View
          style={{
            width: "100%",
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: COLOR.BORDER_COLOR,
            paddingBottom: 20,
          }}
        >
          <UsIcon width={28} height={28}/>
          <Text style={styles.title_list}>United States</Text>
        </View>
        <ScrollView>
          {Contries.map((item) => (
            <TouchableOpacity
              key={item.code}
              style={[
                styles.list_item,
                styles.flex_row,
                { justifyContent: "space-between" },
              ]}
              onPress={() => navigation.navigate("HomeMaster")}
            >
              <View style={[styles.flex_row, { height: 40 }]}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={32}
                color={COLOR.TEXT_OPACITY_COLOR}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  list_search: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 40,
  },
  title_list: {
    fontFamily: "quicksan_700",
    fontSize: 20,
    color: COLOR.BLACK,
    marginLeft:20,
  },

  list_item: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: COLOR.BORDER_COLOR,
  },

  flex_row: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontFamily: "quicksan_700",
    color: COLOR.BLACK,
    fontSize: 16,
    marginLeft: 8,
  },
});
