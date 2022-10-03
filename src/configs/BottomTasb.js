import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Dimensions, StyleSheet } from "react-native";

import Home from "~/Screens/Home";
import Discovery from "~/Screens/Discovery";
import Bookmark from "~/Screens/Bookmark";
import TopFoodie from "~/Screens/TopFoodie";
import User from "~/Screens/User";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import {COLOR} from '~/assets/Colors'

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <Entypo name="home" size={34} color={color} />
              </View>
            );
          } else if (route.name === "Discovery") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <Feather name="map-pin" size={34} color={color} />
              </View>
            );
          } else if (route.name === "Bookmark") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <Feather name="bookmark" size={34} color={color} />
              </View>
            );
          } else if (route.name === "TopFoodie") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <Ionicons name="ios-trophy-outline" size={34} color={color} />
              </View>
            );
          } else if (route.name === "User") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <FontAwesome5 name="user" size={34} color={color} />
              </View>
            );
          }
        },
        tabBarStyle: {
          height: 80,
        },
        tabBarActiveTintColor: COLOR.PRIMARY_COLOR,
        tabBarInactiveTintColor: COLOR.TEXT_OPACITY_COLOR,
        tabBarShowLabel: true,
        tabBarLabelStyle:{
          fontFamily: "quicksan_700",
          fontSize:10,
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Discovery"
        component={Discovery}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TopFoodie"
        component={TopFoodie}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  background_icon: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#20d9941f",
  },
});

export default BottomTab;
