import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { COLOR } from "~/assets/Colors";
import Card from "~/components/Card";

export default function FavoriteCuisine({ title }) {
  const Favorites = [
    {
      name1: "american",
      color1: "#4F2E19",
      name2: "france",
      color2: "#794C2F",
    },
    {
      name1: "japan",
      color1: "#933017",
      name2: "health",
      color2: "#435124",
    },
    {
      name1: "autralian",
      color1: "#523B13",
      name2: "Korean",
      color2: "#322216",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
      }}
    >
      <View
        style={{
          flex: 1,
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
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Favorites.map((item) => (
            <View style={{marginLeft:15}} key={item.color1}>
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 80,
                  backgroundColor: item.color1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "quicksan_700",
                    fontSize: 16,
                    textTransform: "uppercase",
                    color: COLOR.WHITE,
                  }}
                >
                  {item.name1}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 80,
                  backgroundColor: item.color2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  marginTop:15,
                }}
              >
                <Text
                  style={{
                    fontFamily: "quicksan_700",
                    fontSize: 16,
                    textTransform: "uppercase",
                    color: COLOR.WHITE,
                  }}
                >
                  {item.name2}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
