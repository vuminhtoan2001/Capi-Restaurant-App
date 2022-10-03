import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { COLOR } from "~/assets/Colors";
import Card from "~/components/Card";

export default function GroupCard({title}){
    return (
        <View
          style={{
            flex: 1,
            height: "100%",
            // backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Card />
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </View>
        </View>
    )
}