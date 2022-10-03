import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import LayoutFull from "~/components/LayoutFull";
import { COLOR } from "~/assets/Colors";
import ActionList from "~/components/ActionList";
import Photos from "~/components/Photos";
import ReviewList from "~/components/Restaurant/ReviewList";
import GroupCard from "~/components/GroupCard";
import GroupCardCollection from "~/components/GroupCardCollection";

export default function Restaurant() {
  const navigation = useNavigation();
  return (
    <LayoutFull statusBarStyle="white-content">
      <ScrollView>
        <View>
          <Image
            style={{ height: 250, resizeMode: "cover" }}
            source={{
              uri: "https://www.nrn.com/sites/nrn.com/files/pizza-hut-store-closures.gif",
            }}
          />
          <TouchableOpacity onPress={()=> navigation.goBack()} style={{ position: "absolute", top: 40, left: 20 }}>
            <AntDesign
              name="arrowleft"
              size={34}
              color="white"
            />
          </TouchableOpacity>
        </View>
        {/* Title */}
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 4,
            borderColor: COLOR.BACKGROUND_OPACITY_COLOR,
          }}
        >
          <Text style={{ fontFamily: "quicksan_700", fontSize: 20 }}>
            Lombar Pizza
          </Text>
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 20,
              padding: 1,
              paddingHorizontal: 8,
              backgroundColor: COLOR.PRIMARY_COLOR,
              color: COLOR.WHITE,
              borderRadius: 8,
            }}
          >
            4.8
          </Text>
        </View>
        {/* Action List */}
        <ActionList />
        {/* Map address */}
        <View>
          <Image
            style={{ width: "100%", height: 120, resizeMode: "cover" }}
            source={require("~/assets/Images/map.png")}
          />
          <View style={{ position: "absolute", top: 10, left: 20 }}>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              East 46th Stress, New York
            </Text>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              Pizza, Italian
            </Text>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              11:30AM to 11PM
            </Text>
          </View>
        </View>
        {/* order food online */}
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Image
            style={{ widht: "100%", height: 80, borderRadius: 4 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJy9T-S5k5cB5Iy_FQODs8_2vnYhAFJrp-Xw&usqp=CAU",
            }}
          />
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 20,
              color: "white",
              position: "absolute",
              top: 20,
              left: 30,
            }}
          >
            Order food Online
          </Text>
        </TouchableOpacity>
        {/* Photos */}
        <Photos title="Photos" />
        {/* Detail */}
        <View
          style={{
            width: "100%",
            height: 4,
            backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
          }}
        ></View>
        <View style={{ paddingVertical: 20, paddingHorizontal: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.BLACK,
              }}
            >
              Detail
            </Text>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.PRIMARY_COLOR,
              }}
            >
              Read all
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              Call
            </Text>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.PRIMARY_COLOR,
              }}
            >
              (212)794-1262
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              Cuisines
            </Text>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.PRIMARY_COLOR,
              }}
            >
              Pizza Italian
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              Average Cost
            </Text>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              $20 - $50
            </Text>
          </View>
        </View>
        {/* Review */}
        <View
          style={{
            width: "100%",
            height: 4,
            backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
          }}
        ></View>
        <ReviewList />
        {/* Same Restaurant */}
        <View
          style={{
            width: "100%",
            height: 4,
            backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
          }}
        ></View>
        <GroupCard title="Same Restaurant" />
        {/* Same Restaurant */}
        <View
          style={{
            width: "100%",
            height: 4,
            backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
          }}
        ></View>
        <View style={{ paddingBottom: 30 }}>
          <GroupCardCollection title="Collections by Capi" />
        </View>
      </ScrollView>
    </LayoutFull>
  );
}
