import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { COLOR } from "~/assets/Colors";
import Card from "~/components/Card";

export default function Photos({ title }) {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: COLOR.WHITE,
        paddingBottom:20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 18,
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 16,
            color: COLOR.BLACK,
          }}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 16,
              color: COLOR.PRIMARY_COLOR,
            }}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%",paddingHorizontal: 15}}>
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
          }}
        >
          <Image
            style={{ width: 80, height: 80, borderRadius: 4, resizeMode: "contain"}}
            source={{
              uri: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg",
            }}
          />
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.BLACK,
            }}
          >
            Food
          </Text>
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.TEXT_OPACITY_COLOR,
            }}
          >
            (80)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
          }}
        >
          <Image
            style={{ width: 80, height: 80, borderRadius: 4, resizeMode: "contain"}}
            source={{
              uri: "https://images.squarespace-cdn.com/content/v1/57ad8de5ff7c50d12ce76b68/1557409877466-C0USCRFU6WB11OJTARP8/Ambience+Restaurant?format=1000w",
            }}
          />
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.BLACK,
            }}
          >
            Ambience
          </Text>
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.TEXT_OPACITY_COLOR,
            }}
          >
            (25)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            marginLeft: 15,
          }}
        >
          <Image
            style={{ width: 80, height: 80, borderRadius: 4, resizeMode: "contain"}}
            source={{
              uri: "https://www.pos365.vn/storage/app/media/2021/11/menu/menu-quan-cafe.jpg",
            }}
          />
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.BLACK,
            }}
          >
            Menu
          </Text>
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.TEXT_OPACITY_COLOR,
            }}
          >
            (10)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            marginLeft: 15,
          }}
        >
          <Image
            style={{ width: 80, height: 80, borderRadius: 4, resizeMode: "contain"}}
            source={{
              uri: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg",
            }}
          />
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.BLACK,
            }}
          >
            All photos
          </Text>
          <Text
            style={{
              fontFamily: "quicksan_700",
              fontSize: 12,
              color: COLOR.TEXT_OPACITY_COLOR,
            }}
          >
            (115)
          </Text>
        </TouchableOpacity>

        {/* </ScrollView> */}
      </View>
    </View>
  );
}
