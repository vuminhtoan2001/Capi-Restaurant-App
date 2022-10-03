import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { COLOR } from "~/assets/Colors";

export default function ItemBox() {
  const { width, height } = Dimensions.get("window");
  const [showImage, setShowImage] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  const [liked, setLiked] = useState(true);
  const images = [
    {
      url: "https://www.rover.com/blog/wp-content/uploads/2019/06/cat-2934720_1920.jpg",
    },
  ];

  return (
    <View
      style={{
        paddingVertical: 16,
        borderTopWidth: 4,
        borderColor: COLOR.BACKGROUND_OPACITY_COLOR,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 10,
          paddingHorizontal: 16,
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
              1 Days ago
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
      <View style={{ width: "100%", height: 375 }}>
        <Modal
          visible={showImage}
          transparent={true}
          onRequestClose={() => {
            setShowImage(!showImage);
          }}
        >
          <ImageViewer imageUrls={images} />
        </Modal>
        <Pressable onPress={() => setShowImage(!showImage)}>
          <Image
            style={{ width: "100%", height: 375, backgroundColor: "black" }}
            source={{
              uri: "https://www.rover.com/blog/wp-content/uploads/2019/06/cat-2934720_1920.jpg",
            }}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 30,
            width: 120,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => setLiked(!liked)}>
            <AntDesign
              name="like2"
              size={28}
              color={liked ? COLOR.PRIMARY_COLOR : "black"}
            />
          </Pressable>
          <Pressable onPress={() => setShowComment(!showComment)}>
            <FontAwesome5 name="comment" size={28} color="black" />
          </Pressable>
          <Pressable onPress={() => setShowLiked(!showLiked)}>
            <FontAwesome name="share-square-o" size={28} color="black" />
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => setShowLiked(!showLiked)}>
            <Text
              style={{
                marginRight: 20,
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              4 Likes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowComment(!showComment)}>
            <Text
              style={{
                fontFamily: "quicksan_700",
                fontSize: 16,
                color: COLOR.TEXT_OPACITY_COLOR,
              }}
            >
              3 Comments
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Modal Comment*/}
      <Modal
        visible={showComment}
        transparent={true}
        onRequestClose={() => {
          setShowComment(!showComment);
        }}
      >
        <View style={{ flex: 1, backgroundColor: "#16161699" }}>
          <ScrollView scrollEnabled={false}>
            <View
              style={{
                width: width,
                height: height,
                // backgroundColor: "#2725252e",
                justifyContent: "flex-end",
              }}
            >
              <View>
                <View
                  style={{
                    height: 700,
                    backgroundColor: "#fff",
                    margin: 16,
                    borderRadius: 4,
                    padding: 15,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        paddingBottom: 12,
                        borderBottomWidth: 2,
                        borderColor: COLOR.BACKGROUND_OPACITY_COLOR,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "quicksan_700",
                          fontSize: 20,
                          color: COLOR.BLACK,
                        }}
                      >
                        3 Comment
                      </Text>
                      <Text
                        style={{
                          fontFamily: "quicksan_700",
                          fontSize: 12,
                          color: COLOR.TEXT_OPACITY_COLOR,
                        }}
                      >
                        Photos
                      </Text>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                      {/* Comment Item */}
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                              }}
                              source={{
                                uri: "https://stickerly.pstatic.net/sticker_pack/HOztWLErY069XuMiaH30vA/K0Q2VH/31/7b61297b-f4c9-453c-a219-d5f2cb529387.png",
                              }}
                            />
                            <Text
                              style={{
                                fontFamily: "quicksan_700",
                                fontSize: 16,
                                color: COLOR.BLACK,
                                marginLeft: 10,
                              }}
                            >
                              Hibe Nested
                            </Text>
                          </View>
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
                        <Text
                          style={{
                            fontFamily: "quicksan_500",
                            fontSize: 12,
                            color: COLOR.BLACK,
                            marginTop: 10,
                            marginLeft: 40,
                          }}
                        >
                          I enjoyed the food of the restaurant. The dishes are
                          attractive and very beautiful. Good food, luxurious
                          space and enthusiastic service. I will be back in the.
                        </Text>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                              }}
                              source={{
                                uri: "https://stickerly.pstatic.net/sticker_pack/HOztWLErY069XuMiaH30vA/K0Q2VH/31/7b61297b-f4c9-453c-a219-d5f2cb529387.png",
                              }}
                            />
                            <Text
                              style={{
                                fontFamily: "quicksan_700",
                                fontSize: 16,
                                color: COLOR.BLACK,
                                marginLeft: 10,
                              }}
                            >
                              Hibe Nested
                            </Text>
                          </View>
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
                        <Text
                          style={{
                            fontFamily: "quicksan_500",
                            fontSize: 12,
                            color: COLOR.BLACK,
                            marginTop: 10,
                            marginLeft: 40,
                          }}
                        >
                          I enjoyed the food of the restaurant. The dishes are
                          attractive and very beautiful. Good food, luxurious
                          space and enthusiastic service. I will be back in the.
                        </Text>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                              }}
                              source={{
                                uri: "https://stickerly.pstatic.net/sticker_pack/HOztWLErY069XuMiaH30vA/K0Q2VH/31/7b61297b-f4c9-453c-a219-d5f2cb529387.png",
                              }}
                            />
                            <Text
                              style={{
                                fontFamily: "quicksan_700",
                                fontSize: 16,
                                color: COLOR.BLACK,
                                marginLeft: 10,
                              }}
                            >
                              Hibe Nested
                            </Text>
                          </View>
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
                        <Text
                          style={{
                            fontFamily: "quicksan_500",
                            fontSize: 12,
                            color: COLOR.BLACK,
                            marginTop: 10,
                            marginLeft: 40,
                          }}
                        >
                          I enjoyed the food of the restaurant. The dishes are
                          attractive and very beautiful. Good food, luxurious
                          space and enthusiastic service. I will be back in the.
                        </Text>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                              }}
                              source={{
                                uri: "https://stickerly.pstatic.net/sticker_pack/HOztWLErY069XuMiaH30vA/K0Q2VH/31/7b61297b-f4c9-453c-a219-d5f2cb529387.png",
                              }}
                            />
                            <Text
                              style={{
                                fontFamily: "quicksan_700",
                                fontSize: 16,
                                color: COLOR.BLACK,
                                marginLeft: 10,
                              }}
                            >
                              Hibe Nested
                            </Text>
                          </View>
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
                        <Text
                          style={{
                            fontFamily: "quicksan_500",
                            fontSize: 12,
                            color: COLOR.BLACK,
                            marginTop: 10,
                            marginLeft: 40,
                          }}
                        >
                          I enjoyed the food of the restaurant. The dishes are
                          attractive and very beautiful. Good food, luxurious
                          space and enthusiastic service. I will be back in the.
                        </Text>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                              }}
                              source={{
                                uri: "https://stickerly.pstatic.net/sticker_pack/HOztWLErY069XuMiaH30vA/K0Q2VH/31/7b61297b-f4c9-453c-a219-d5f2cb529387.png",
                              }}
                            />
                            <Text
                              style={{
                                fontFamily: "quicksan_700",
                                fontSize: 16,
                                color: COLOR.BLACK,
                                marginLeft: 10,
                              }}
                            >
                              Hibe Nested
                            </Text>
                          </View>
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
                        <Text
                          style={{
                            fontFamily: "quicksan_500",
                            fontSize: 12,
                            color: COLOR.BLACK,
                            marginTop: 10,
                            marginLeft: 40,
                          }}
                        >
                          I enjoyed the food of the restaurant. The dishes are
                          attractive and very beautiful. Good food, luxurious
                          space and enthusiastic service. I will be back in the.
                        </Text>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                              }}
                              source={{
                                uri: "https://stickerly.pstatic.net/sticker_pack/HOztWLErY069XuMiaH30vA/K0Q2VH/31/7b61297b-f4c9-453c-a219-d5f2cb529387.png",
                              }}
                            />
                            <Text
                              style={{
                                fontFamily: "quicksan_700",
                                fontSize: 16,
                                color: COLOR.BLACK,
                                marginLeft: 10,
                              }}
                            >
                              Hibe Nested
                            </Text>
                          </View>
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
                        <Text
                          style={{
                            fontFamily: "quicksan_500",
                            fontSize: 12,
                            color: COLOR.BLACK,
                            marginTop: 10,
                            marginLeft: 40,
                          }}
                        >
                          I enjoyed the food of the restaurant. The dishes are
                          attractive and very beautiful. Good food, luxurious
                          space and enthusiastic service. I will be back in the.
                        </Text>
                      </View>

                      {/* Comment item */}
                    </ScrollView>
                    {/* Inpput comment */}
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        source={{
                          uri: "https://img.freepik.com/free-vector/cute-cat-yoga-pose-cartoon-illustration_138676-2791.jpg?w=2000",
                        }}
                      />
                      <TextInput
                        style={{
                          flex: 1,
                          paddingHorizontal: 14,
                          paddingVertical: 7,
                          backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
                          color: COLOR.BLACK,
                          borderRadius: 10,
                          marginLeft: 15,
                        }}
                        placeholder="Typing your comment"
                      />
                    </View>
                  </View>
                </View>
                <Pressable
                  onPress={() => setShowComment(!showComment)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    top: -16,
                    right: 16,
                  }}
                >
                  <Feather name="x" size={24} color={COLOR.PRIMARY_COLOR} />
                  <Text
                    style={{
                      fontFamily: "quicksan_700",
                      fontSize: 16,
                      color: COLOR.PRIMARY_COLOR,
                    }}
                  >
                    Close
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/* Modal liked */}
      <Modal
        visible={showLiked}
        transparent={true}
        onRequestClose={() => {
          setShowLiked(!showLiked);
        }}
      >
        <View style={{ flex: 1, backgroundColor: "#16161699" }}>
          <ScrollView scrollEnabled={false}>
            <View
              style={{
                width: width,
                height: height,
                justifyContent: "flex-end",
              }}
            >
              <View>
                <View
                  style={{
                    height: 700,
                    backgroundColor: "#fff",
                    margin: 16,
                    borderRadius: 4,
                    padding: 15,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        paddingBottom: 12,
                        borderBottomWidth: 2,
                        borderColor: COLOR.BACKGROUND_OPACITY_COLOR,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "quicksan_700",
                          fontSize: 20,
                          color: COLOR.BLACK,
                        }}
                      >
                        3 Likes
                      </Text>
                      <Text
                        style={{
                          fontFamily: "quicksan_700",
                          fontSize: 12,
                          color: COLOR.TEXT_OPACITY_COLOR,
                        }}
                      >
                        Photos
                      </Text>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                      {/* Comment Item */}
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingHorizontal: 16,
                          paddingVertical:16,
                          borderBottomWidth:2,
                          borderColor:COLOR.BACKGROUND_OPACITY_COLOR
                        }}
                      >
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
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
                          paddingHorizontal: 16,
                          paddingVertical:16,
                          borderBottomWidth:2,
                          borderColor:COLOR.BACKGROUND_OPACITY_COLOR
                        }}
                      >
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
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
                          paddingHorizontal: 16,
                          paddingVertical:16,
                          borderBottomWidth:2,
                          borderColor:COLOR.BACKGROUND_OPACITY_COLOR
                        }}
                      >
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
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

                      {/* Comment item */}
                    </ScrollView>
                    {/* Inpput comment */}
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        source={{
                          uri: "https://img.freepik.com/free-vector/cute-cat-yoga-pose-cartoon-illustration_138676-2791.jpg?w=2000",
                        }}
                      />
                      <TextInput
                        style={{
                          flex: 1,
                          paddingHorizontal: 14,
                          paddingVertical: 7,
                          backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
                          color: COLOR.BLACK,
                          borderRadius: 10,
                          marginLeft: 15,
                        }}
                        placeholder="Typing your comment"
                      />
                    </View>
                  </View>
                </View>
                <Pressable
                  onPress={() => setShowLiked(!showLiked)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    top: -16,
                    right: 16,
                  }}
                >
                  <Feather name="x" size={24} color={COLOR.PRIMARY_COLOR} />
                  <Text
                    style={{
                      fontFamily: "quicksan_700",
                      fontSize: 16,
                      color: COLOR.PRIMARY_COLOR,
                    }}
                  >
                    Close
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
