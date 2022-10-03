import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ReviewImage() {
  return (
    <View
      style={{
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
          borderRadius: 4,
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            borderRadius: 4,
          }}
          source={{
            uri: "https://truongtin.top/wp-content/uploads/2021/09/23/08/avatar-chibi-avatar-cute-anh-dai-dien-chibi-dep-1.jpg",
          }}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
            backgroundColor: "#0f0f1063",
            position: "absolute",
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
          borderRadius: 4,
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            borderRadius: 4,
          }}
          source={{
            uri: "https://truongtin.top/wp-content/uploads/2021/09/23/08/avatar-chibi-avatar-cute-anh-dai-dien-chibi-dep-1.jpg",
          }}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
            backgroundColor: "#0f0f1063",
            position: "absolute",
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
          borderRadius: 4,
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            borderRadius: 4,
          }}
          source={{
            uri: "https://truongtin.top/wp-content/uploads/2021/09/23/08/avatar-chibi-avatar-cute-anh-dai-dien-chibi-dep-1.jpg",
          }}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
            backgroundColor: "#0f0f1063",
            position: "absolute",
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
          borderRadius: 4,
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            borderRadius: 4,
          }}
          source={{
            uri: "https://truongtin.top/wp-content/uploads/2021/09/23/08/avatar-chibi-avatar-cute-anh-dai-dien-chibi-dep-1.jpg",
          }}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
            backgroundColor: "#0f0f10c9",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <Text style={{fontFamily: "quicksan_700",fontSize:16, color: "white"}}>+20</Text>
            <Text style={{fontFamily: "quicksan_700",fontSize:16, color: "white"}}>Photos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
