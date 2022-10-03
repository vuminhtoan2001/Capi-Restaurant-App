import { Image, Text, View, TouchableOpacity } from "react-native";
import { COLOR } from "~/assets/Colors";
import Rated from "~/components/Rated";
import ReadMore from "@fawazahmed/react-native-read-more";
import ReviewImage from "./ReviewImage"

export default function ItemView() {
  return (
    <View style={{ marginTop: 10, borderTopWidth:4, borderColor:COLOR.BACKGROUND_OPACITY_COLOR, paddingTop:10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{
              width: 46,
              height: 46,
              resizeMode: "contain",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: COLOR.TEXT_OPACITY_COLOR,
            }}
            source={{
              uri: "https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.BLACK,
              }}
            >
              Hibe Nested
            </Text>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 12,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              45 Reviews, 210 Followers
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              paddingVertical: 3,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: COLOR.PRIMARY_COLOR,
              borderRadius: 24,
              color: COLOR.PRIMARY_COLOR,
              fontFamily: "quicksan_700",
            }}
          >
            Follow
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Rated rated={5} />
        <Text
          style={{
            fontFamily: "quicksan_700",
            fontSize: 12,
            color: COLOR.TEXT_OPACITY_COLOR,
          }}
        >
          1 Days ago
        </Text>
      </View>
      <View style={{paddingVertical:10}}>
        <ReadMore
          numberOfLines={4}
          style={{
            fontFamily: "quicksan_500",
            fontSize: 16,
            color: COLOR.BLACK,
            lineHeight: 24,
          }}
          seeMoreText="Read more"
          seeMoreStyle={{
            fontFamily: "quicksan_500",
            fontSize: 16,
            color: COLOR.PRIMARY_COLOR,
            lineHeight: 24,
          }}
          seeLessText="Read Less"
          seeLessStyle={{
            fontFamily: "quicksan_500",
            fontSize: 16,
            color: COLOR.PRIMARY_COLOR,
            lineHeight: 24,
          }}
        >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </ReadMore>
      </View>
      <ReviewImage/>
    </View>
  );
}
