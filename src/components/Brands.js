import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { COLOR } from "~/assets/Colors";
import Card from "~/components/Card";

export default function Brands({ title }) {
  const brands = [
    {
      content: "23 Outlets",
      color: "#E8334A",
    },
    {
      content: "16 Outlets",
      color: "#F5821F",
    },
    {
      content: "31 Outlets",
      color: "#63BF67",
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
          {brands.map((item) => (
              <TouchableOpacity
              key={item.color}
                style={{
                  width: 132,
                  height: 132,
                  backgroundColor: item.color,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  borderRadius: 6,
                  marginLeft:15
                }}
              >
                <Text
                  style={{
                    fontFamily: "quicksan_700",
                    fontSize: 12,
                    textTransform: "uppercase",
                    color: COLOR.WHITE,
                    paddingBottom:20
                  }}
                >
                  {item.content}
                </Text>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
